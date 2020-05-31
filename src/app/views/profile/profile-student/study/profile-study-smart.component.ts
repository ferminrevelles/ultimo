import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppStore } from 'src/app/shared/models/store.interface';
import * as UserSelector from '../../../../shared/state/user/selectors/user.selector';
@Component({
  selector: 'app-profile-study-smart',
  template: `<app-profile-study
    [user]="users$|async"></app-profile-study>`,
  
})
export class ProfileStudySmartComponent implements OnInit {
  public users$: Observable<any> = this.store$.select(UserSelector.selectAll);
  
  constructor(private store$: Store<AppStore>) { }
  
  ngOnInit() {
  
  }

}
