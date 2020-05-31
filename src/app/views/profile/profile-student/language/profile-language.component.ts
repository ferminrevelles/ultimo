import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MockData } from 'src/app/shared/mock-data';
import { Language,LanguageLevel,LanguageName} from 'src/app/shared/models/language.model';
import { User } from 'src/app/shared/models/user.model';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import { Store } from '@ngrx/store';
import * as UserActions from '../../../../shared/state/user/actions/user.actions';
//Importado para modificar el formato fecha
import { MAT_MOMENT_DATE_FORMATS,  MomentDateAdapter,  MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-profile-language',
  templateUrl: './profile-language.component.html',
  styleUrls: ['./profile-language.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class ProfileLanguageComponent implements OnInit  {
  @Input() user:User;
  
  rForm: FormGroup;
  language: Language = {} as Language;
  languageLevels: LanguageLevel[];
  languageNames: LanguageName[];
  userTemp:User;
  uid:number;
  
  constructor(
    private route: ActivatedRoute,
    private store$: Store<User>
  ) {
    this.route.params.subscribe(params => {
      this.uid = +params.uid;
    });
  }
  ngOnInit() {
  //Dependiendo del Id pasado por parámetro hará un nuevo lenguaje o actualizará
    this.language = (this.user.languages.find(language => language.uid === this.uid) || {}) as Language;
    this.loadSelectProperties();
    this.loadFormInstance();
    
  }
  public loadSelectProperties(): void {
    this.languageLevels = MockData.LANGUAGES_LEVEL;
    this.languageNames = MockData.LANGUAGES_NAME;
  }

  public loadFormInstance(): void {
    this.rForm = new FormGroup({
      level: new FormControl(this.language.level, [Validators.required]),
      name: new FormControl(this.language.name, [Validators.required]),
      date: new FormControl(this.language.date, [
        Validators.required,
        dateValidator()
      ])
    });
  }
  public submit() {
    this.saveOrUpdate({ ...this.language, ...this.rForm.value });
  }

  compareLevel(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  compareName(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private update(language: Language) {
       const languages = this.user.languages.map(_language =>
      _language.uid === language.uid ? language : _language
    );
    console.log(languages);
    const user = {...this.user,languages};
    console.log(user);
    this.store$.dispatch(new UserActions.Update(user));

  }
  private save(language: Language) {
      const _language = MockData.fakeIncreaseID<Language>(
      this.user.languages,
      language
    );
    const languages = [...this.user.languages,_language];
    const user = {...this.user,languages};
    this.store$.dispatch(new UserActions.Update(user));
  }

  saveOrUpdate(language: Language) {
    //Aquí lanza una función de nuevo o update dependiendo de si el uid existe en el array language.
    this.isNew() ? this.save(language) : this.update(language);
  }
  public isNew(): boolean {
    return !!!this.language.uid;
  }
}
