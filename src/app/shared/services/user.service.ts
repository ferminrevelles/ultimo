import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/shared/app.settings';
import { catchError, exhaustMap, map, tap ,switchMap} from 'rxjs/operators';
import { Credentials, User} from '../models/user.model';
import { ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  existe:boolean;
  users: User[]=[];
  constructor(private http: HttpClient,private store$: Store<User>) {}

  getUsers():Observable<User> {
    return this.http.get<any>(AppSettings.API_ENDPOINT_USERS);
    
  }

  public login(): Observable<any>{
     return this.getUsers();
  }

  public remember(): Observable<any>{
    return this.getUsers();
  }

  public updateProfile(profile: any /* User */): Observable<any /* User */> {
    console.log ("Petición al servidor");
    return this.http.put<any>(AppSettings.API_ENDPOINT_USERS, { ...profile });
  }

  
}
