import { UserActionTypes, UserActions } from '../actions/user.actions';
import { User } from '../../../models/user.model';
import { Offer } from '../../../models/offer.model';
//import { UserState } from '../user/user.state';

export interface AuthState {
    loggedIn:boolean,
    rememberCredencial:boolean,
    errorUser:boolean,
    update:boolean,
    message:string,
    user:User,
}

export const initialAuthState: AuthState = {
  rememberCredencial:false,
  errorUser:false,
  loggedIn:false,
  update:false,
  message:null,
  user: undefined,
};

export function userReducer(
  
  state = initialAuthState,
  action: UserActions): AuthState {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        rememberCredencial:false,
        errorUser:false,
        loggedIn:true,
        update:false,
        message:"User Correcto",
        user: action.user,
       
      };
    case UserActionTypes.LOGIN_FAILED:
        return {
          rememberCredencial:false,
          errorUser:true,
          loggedIn:false,
          update:false,
          message: action.message,
          user: undefined,
      };

      case UserActionTypes.REMEMBER_SUCCESS:
      return {
        rememberCredencial:true,
        errorUser:false,
        loggedIn:false,
        update:false,
        message:"User Correcto",
        user: action.user,
       
      };
      case UserActionTypes.REMEMBER_FAILED:
        return {
          rememberCredencial:false,
          errorUser:true,
          loggedIn:false,
          update:false,
          message: action.message,
          user: undefined,
        };

     case UserActionTypes.UPDATE_SUCCESS:
      return {
        rememberCredencial:false,
        errorUser:false,
        loggedIn:true,        
        update:true,
        message:"User Correcto",
        user: action.user,
       
      };

    default:
      return state;
  }
}
