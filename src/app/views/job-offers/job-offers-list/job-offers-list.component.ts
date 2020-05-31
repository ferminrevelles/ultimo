import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/shared/models/offer.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VocationalStudy,Institution,Category,TitleStudy,Grade} from 'src/app/shared/models/study.model';
import { MockData } from 'src/app/shared/mock-data';
//Importado para modificar el formato fecha
import { MAT_MOMENT_DATE_FORMATS,  MomentDateAdapter,  MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Municipe, Province} from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-job-offers-list',
  templateUrl: './job-offers-list.component.html',
  styleUrls: ['./job-offers-list.component.scss'],
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
export class JobOffersListComponent implements OnInit {
//  @Input() user:User;
  @Input() offers: Offer[]=[];
  offersStudy: Offer[] = [];
  offersOther: Offer[] = [];
  displayedColumnsOffers: string[] = ['puesto','empresa','familia','fecha','provincia','municipio'];
  rForm: FormGroup;
  public categories: Category[];
  municipes: Municipe[];
  provinces: Province[];
  
  constructor() { }

  ngOnInit() {
   this.categories = MockData.VOCATIONAL_CATEGORY;
   this.municipes = MockData.MUNICIPES;
   this.provinces = MockData.PROVINCES;
   this.loadForm();
  }
  public loadForm(): void {
    this.rForm = new FormGroup({
      puesto: new FormControl('', [Validators.required]),
      empresa: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      date_incio: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      municipe: new FormControl('', [Validators.required]),
    });
  }
  submit(){
    console.log("Añadir oferta al sistema");
    console.log(this.rForm.value);
  }
}
