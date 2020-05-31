import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CollegeStudy } from 'src/app/shared/models/study.model';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
//Importado para modificar el formato fecha
import { MAT_MOMENT_DATE_FORMATS,  MomentDateAdapter,  MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-university-degree-form',
  templateUrl: './university-degree-form.component.html',
  styleUrls: ['./university-degree-form.component.scss'],
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
export class UniversityDegreeComponent {
  @Output() onSave: EventEmitter<CollegeStudy> = new EventEmitter();
  @Input() study: CollegeStudy = {} as CollegeStudy;
  public rForm: FormGroup;

  constructor() {}
  ngOnInit() {
    this.loadSelectProperties();
    this.loadFormInstance();
  }

  public loadSelectProperties(): void {}

  public loadFormInstance(): void {
    this.rForm = new FormGroup({
      institution: new FormControl(this.study.institution, [
        Validators.required
      ]),
      title: new FormControl(this.study.title, [Validators.required]),
      date: new FormControl(this.study.date, [
        Validators.required,
        dateValidator()
      ]),
      bilingue: new FormControl(this.study.bilingue, [])
    });
  }

  public submit() {
    this.onSave.emit({ ...this.study, ...this.rForm.value });
  }

  public save() {
    const study: CollegeStudy = {
      certificate: false,
      ...this.rForm.value
    };
    this.onSave.emit(study);
  }
}
