import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/shared/app.settings';
import { catchError, exhaustMap, map, tap ,switchMap} from 'rxjs/operators';
import { Credentials, User} from '../models/user.model';
import { ofType } from '@ngrx/effects';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  existe:boolean;
  users: User[]=[];
  constructor(private http: HttpClient,private router:Router,) {}

  getUsers():Observable<User> {
    return this.http.get<any>(AppSettings.API_ENDPOINT_USERS);
    
  }

   public login(): Observable<any>{
     return this.getUsers();
  }
}
