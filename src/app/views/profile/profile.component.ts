import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/shared/models/store.interface';
import * as UserSelector from '../../shared/state/user/selectors/user.selector';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  public users$: Observable<any> = this.store$.select(UserSelector.selectAll);
  
  constructor(private store$: Store<AppStore>) { }
  
  ngOnInit() {
  
  }

}
