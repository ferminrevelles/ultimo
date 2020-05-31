import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/shared/app.settings';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  color:any;
  constructor() {}

  setColor(color:String){
      console.log("Entra");
    this.color=color;
  }
  getColor(){
      return this.color;
  }
  
  }