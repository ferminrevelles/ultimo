import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store} from '@ngrx/store';
import { AppStore } from 'src/app/shared/models/store.interface';
import * as UserSelector from '../../../../shared/state/user/selectors/user.selector';
@Component({
  selector: 'app-work-experiencie-smart',
  template: `<app-work-experiencie
    [user]="users$|async"></app-work-experiencie>`,
  
})
export class WorkExperiencieSmartComponent implements OnInit {
  public users$: Observable<any> = this.store$.select(UserSelector.selectAll);
  
  constructor(private store$: Store<AppStore>) { }
  
  ngOnInit() {
  
  }
  colorChange(color) {
    console.log(color);
    }
}
