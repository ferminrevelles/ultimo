import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStore } from 'src/app/shared/models/store.interface';
import * as UserSelector from '../../shared/state/user/selectors/user.selector';
import { Store } from '@ngrx/store';
import * as UserActions from '../../shared/state/user/actions/user.actions';
import { User } from '../../shared/models/user.model';
@Component({
  selector: 'app-forgot-password-smart',
  template: `<app-forgot-password [user]="users$|async" [state]="state$|async" (remember)="onRemember($event)"></app-forgot-password>`,
  
})
export class ForgotPasswordSmartComponent implements OnInit {
  public users$: Observable<any> = this.store$.select(UserSelector.selectAll);
  public state$: Observable<any> = this.store$.select(UserSelector.select);
  
  constructor(private store$: Store<AppStore>) { }
  
  ngOnInit() {
  
  }
  public onRemember(email:string){
    this.store$.dispatch(new UserActions.Remember(email));
  }
}
