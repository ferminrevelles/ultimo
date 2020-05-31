import { Component, OnInit,ChangeDetectionStrategy, OnChanges,Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockData } from 'src/app/shared/mock-data';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import { User, DocumentType, Municipe, Province} from 'src/app/shared/models/user.model';
import { documentNumberValidator } from 'src/app/shared/directives/document-number-validator.directive';
import { Store } from '@ngrx/store';
import * as UserActions from '../../../../shared/state/user/actions/user.actions';
//Importado para modificar el formato fecha
import { MAT_MOMENT_DATE_FORMATS,  MomentDateAdapter,  MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@Component({
  selector: 'app-profile-account',
  templateUrl: './profile-account.component.html',
  styleUrls: ['./profile-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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


export class ProfileAccountComponent implements OnInit {
  @Input() user: User;
  rForm: FormGroup;
  documentsType: DocumentType[];
  municipes: Municipe[];
  provinces: Province[];
  birthdate = new FormControl(new Date());

  constructor(private store$: Store<User>,private router: Router) {
  }
  ngOnInit() {
    this.loadSelectProperties();
    this.loadFormInstance();
  }
  public loadSelectProperties(): void {
    this.documentsType = MockData.DOCUMENTS_TYPE;
    this.municipes = MockData.MUNICIPES;
    this.provinces = MockData.PROVINCES;
  }

  public loadFormInstance(): void {
    this.rForm = new FormGroup(
      {
        name: new FormControl(this.user.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
          Validators.pattern(/^[a-zA-Z]+$/)
        ]),
        surname: new FormControl(this.user.surname, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
          Validators.pattern(/^[a-zA-Z]+$/)
        ]),
        phone: new FormControl(this.user.phone, [
          Validators.pattern(/^[0-9]{6,}$/),
          Validators.required
        ]),
        phone2: new FormControl(this.user.phone2, [
          Validators.pattern(/^[0-9]{6,}$/),
          Validators.required
        ]),

        birthdate: new FormControl(this.user.birthdate, [
          Validators.required,
          dateValidator()
        ]),
        documentType: new FormControl(this.user.documentType, [
          Validators.required
        ]),
        documentNumber: new FormControl(this.user.documentNumber, [
          Validators.required
        ]),
        street: new FormControl(this.user.address.street, [
          Validators.required
        ]),
        municipe: new FormControl(this.user.address.municipe, [
          Validators.required
        ]),
        province: new FormControl(this.user.address.province, [
          Validators.required
        ]),
        aboutMe: new FormControl(this.user.aboutMe),
        otherCompetences: new FormControl(this.user.aboutMe),
        license: new FormControl(this.user.license)
      },
      documentNumberValidator()
    );
  }

  public save() {
    const user = { ...this.user, ...this.rForm.value };
    this.store$.dispatch(new UserActions.Update(user));
    this.router.navigate(['/admin/profile']);
  }
  compareByUID(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
 
}
