import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../../shared/state/user/actions/user.actions';
import { Credentials} from '../../shared/models/user.model';
import { Observable } from 'rxjs';
import * as UserSelector from '../../shared/state/user/selectors/user.selector';
import { AppStore } from 'src/app/shared/models/store.interface';

@Component({
  selector: 'login-page',
  template: `
   <app-signin        
   [state]="states$|async"   
   (login)="onLogin($event)">`
    ,
 /* styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush*/
})
export class SigninPageComponent implements OnInit {

  public states$: Observable<any> = this.store$.select(UserSelector.select);

  constructor(private store$: Store<AppStore>) {}
  
  ngOnInit() {
  }

  onLogin(credentials:Credentials) {
  this.store$.dispatch(new UserActions.Login(credentials));
  }



  
}