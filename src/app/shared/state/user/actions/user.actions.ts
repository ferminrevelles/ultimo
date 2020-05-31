import { Credentials} from '../../../models/user.model';
import { Action } from '@ngrx/store';
import {User} from '../../../models/user.model';

export enum UserActionTypes {
  LOGIN = '[Login Page] Login',
  LOGIN_SUCCESS = '[Login Page] Login success',
  LOGIN_FAILED = '[Login Page], Login failed',
  REMEMBER = '[Remember Pass] Remember',
  REMEMBER_SUCCESS = '[Remember Pass] Remember Successfull',
  REMEMBER_FAILED = '[Remember Pass] Remember Failed',
  UPDATE= '[Update Profile] Update',
  UPDATE_SUCCESS = '[Update Profile] Update Successfull',
  UPDATE_FAILED = '[Update Profile] Update Failed',
}
//----------------LOGIN--------------------
export class Login implements Action{
  readonly type = UserActionTypes.LOGIN;
  constructor(public payload:Credentials){}
}

export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LOGIN_SUCCESS;

  constructor(public user: User) {}
}
export class LoginFailed implements Action {
  readonly type = UserActionTypes.LOGIN_FAILED;

  constructor(public message: string) {}
}
//----------------REMEMBER PASSWORD--------------------
export class Remember implements Action{
  readonly type = UserActionTypes.REMEMBER;
  constructor(public payload:String){}
}

export class RememberSuccess implements Action {
  readonly type = UserActionTypes.REMEMBER_SUCCESS;

  constructor(public user: User) {}
}
export class RememberFailed implements Action {
  readonly type = UserActionTypes.REMEMBER_FAILED;

  constructor(public message: string) {}
}
//----------------MODIFICAR PERFIL--------------------
export class Update implements Action{
  readonly type = UserActionTypes.UPDATE;
  constructor(public user:User){}
}

export class UpdateSuccess implements Action {
  readonly type = UserActionTypes.UPDATE_SUCCESS;

  constructor(public user: User) {}
}
export class UpdateFailed implements Action {
  readonly type = UserActionTypes.UPDATE_FAILED;

  constructor(public message: string) {}
}


export type UserActions =
|Login
|LoginSuccess
|LoginFailed
|Remember
|RememberSuccess
|RememberFailed
|Update
|UpdateSuccess
|UpdateFailed;