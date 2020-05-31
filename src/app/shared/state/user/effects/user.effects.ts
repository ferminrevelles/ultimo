import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, ofType, Effect, act } from '@ngrx/effects';
import { of, Observable} from 'rxjs';
import { catchError, exhaustMap, map, tap ,switchMap} from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import { User} from '../../../models/user.model';
import {Offer} from '../../../models/offer.model';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { OffersService } from '../../../services/offers.service';

@Injectable()
export class UserEffects {
  
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private offerService: OffersService ,
    private snackBar: MatSnackBar,
    private router:Router,
   
  ) {}

  AUTH_ACTIONS_SUCCESS = [
    UserActions.UserActionTypes.LOGIN_SUCCESS,
    UserActions.UserActionTypes.UPDATE_SUCCESS
  ];

  AUTH_ACTIONS_FAILED = [
    UserActions.UserActionTypes.LOGIN_FAILED,
    UserActions.UserActionTypes.UPDATE_FAILED
  ];

  @Effect()
  login$ :Observable<any>= this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LOGIN),
    switchMap((action: any) =>
      this.authService.login().pipe(
          map((users:User)=>{
            console.log("Recepción servidor");
             if (users[0].email==action.payload.email && users[0].password ==action.payload.password){
            console.log("LoginCorrecto");
            this.router.navigate(['/admin/dashboard']);
            return new UserActions.LoginSuccess(users[0]);
             }else{
            console.log("NO LoginCorrecto");
            
            return new UserActions.LoginFailed("Se produjo un error en la autentificación");
            
             }
          }),
          catchError(error=>of(new UserActions.LoginFailed(error))),
       
        )
      )
    );

    @Effect()
    remember$ :Observable<any>= this.actions$.pipe(
      ofType(UserActions.UserActionTypes.REMEMBER),
      switchMap((action: any) =>
        this.userService.remember().pipe(
            map((users:User)=>{
              console.log(action.payload.email)
               if (users[0].email==action.payload.email){
              console.log("Envío de credenciales");
                return new UserActions.RememberSuccess(users[0]);
               }else{
              console.log("No existe ese email en la web");
              return new UserActions.RememberFailed("Se produjo un error en el reenvío de credenciales");
              }
            }),
            catchError(error=>of(new UserActions.RememberFailed(error))),
         
          )
        )
      );

  @Effect()
  updateProfile$ :Observable<any>= this.actions$.pipe(
    ofType(UserActions.UserActionTypes.UPDATE),
    switchMap(({user}) =>
      this.userService.updateProfile(user).pipe(
          map(()=>{
            console.log("Actialización");
            this.router.navigate(['/admin/profile']);
            
            return new UserActions.UpdateSuccess(user);
          }),
          catchError(error=>of(new UserActions.UpdateFailed(error))),
        )
      )
    );

  @Effect({ dispatch: false })
  successNotification$ = this.actions$.pipe(
    ofType(...this.AUTH_ACTIONS_SUCCESS),
    tap(() =>
      this.snackBar.open('SUCCESS', 'Operation success', {
        duration: 2000
      })
    )
  );
  @Effect({ dispatch: false })
  failedNotification$ = this.actions$.pipe(
    ofType(...this.AUTH_ACTIONS_FAILED),
    tap(() =>
      this.snackBar.open('FAILED', 'Operation failed', {
        duration: 2000
      })
    )
  );
}
