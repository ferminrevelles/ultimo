import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MockData } from 'src/app/shared/mock-data';
import { Experience} from 'src/app/shared/models/experience.model';
import { User } from 'src/app/shared/models/user.model';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import { Store } from '@ngrx/store';
import * as UserActions from '../../../../shared/state/user/actions/user.actions';
//Importado para modificar el formato fecha
import { MAT_MOMENT_DATE_FORMATS,  MomentDateAdapter,  MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-work-experiencie',
  templateUrl: './work-experiencie.component.html',
  styleUrls: ['./work-experiencie.component.scss'],
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
export class WorkExperiencieComponent implements OnInit  {
  @Input() user:User;
  
  rForm: FormGroup;
  experiencie: Experience = {} as Experience;
/*  languageLevels: LanguageLevel[];
  languageNames: LanguageName[];*/
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
    this.experiencie = (this.user.experiencies.find(experiencie => experiencie.uid === this.uid) || {}) as Experience;
  //  this.loadSelectProperties();
    this.loadFormInstance();
    
  }
/*  public loadSelectProperties(): void {
    this.languageLevels = MockData.LANGUAGES_LEVEL;
    this.languageNames = MockData.LANGUAGES_NAME;
  }*/

  public loadFormInstance(): void {
    this.rForm = new FormGroup({
      empresa: new FormControl(this.experiencie.empresa, [Validators.required]),
      date_incio: new FormControl(this.experiencie.date_incio, []),
      date_fin: new FormControl(this.experiencie.date_fin, []),
      puesto: new FormControl(this.experiencie.puesto, []),
      tareas: new FormControl(this.experiencie.tareas, []),
    });
  }
  public submit() {
    this.saveOrUpdate({ ...this.experiencie, ...this.rForm.value });
  }

  compareLevel(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  compareName(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private update(experience: Experience) {
       const experiencies = this.user.experiencies.map(_experiencie =>
      _experiencie.uid === experience.uid ? experience : _experiencie
    );
    console.log(experience);
    const user = {...this.user,experiencies};
    console.log(user);
    this.store$.dispatch(new UserActions.Update(user));

  }
  private save(experience: Experience) {
      const _experiencie = MockData.fakeIncreaseID<Experience>(
      this.user.experiencies,
      experience
    );
    const experiencies = [...this.user.experiencies,_experiencie];
    const user = {...this.user,experiencies};
    this.store$.dispatch(new UserActions.Update(user));
  }

  saveOrUpdate(experience: Experience) {
    //Aquí lanza una función de nuevo o update dependiendo de si el uid existe en el array language.
    this.isNew() ? this.save(experience) : this.update(experience);
  }
  public isNew(): boolean {
    return !!!this.experiencie.uid;
  }
}
