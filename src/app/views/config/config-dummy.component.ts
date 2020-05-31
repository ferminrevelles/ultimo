import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../../shared/state/user/actions/user.actions';
import { Credentials} from '../../shared/models/user.model';
import { Observable } from 'rxjs';
import * as UserSelector from '../../shared/state/user/selectors/user.selector';
import { AppStore } from 'src/app/shared/models/store.interface';

@Component({
  selector: 'app-dummy-config',
  template: `
   <app-config
   (cambiocolorbackground)="colorChangeBackground($event)"
   (cambiocolorlink)="colorChangeLink($event)">           
    </app-config>`,
 /* styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush*/
})
export class ConfigDummyComponent implements OnInit {

  lastcolor:string = 'color';
 
  constructor(private store$: Store<AppStore>) {}
  
  ngOnInit() {
    console.log("DUMMY");
  }
  
  colorChangeBackground(color) {
  console.log(color);
  document.getElementById("body").style.background= color ;

  }
  colorChangeLink(color){
  
    
  document.getElementById("row1").classList.remove(this.lastcolor);
  document.getElementById("row1").classList.add(color);
  document.getElementById("row2").classList.remove(this.lastcolor);
  document.getElementById("row2").classList.add(color);
  document.getElementById("row3").classList.remove(this.lastcolor);
  document.getElementById("row3").classList.add(color);
  document.getElementById("row4").classList.remove(this.lastcolor);
  document.getElementById("row4").classList.add(color);
  document.getElementById("row5").classList.remove(this.lastcolor);
  document.getElementById("row5").classList.add(color);
  document.getElementById("row6").classList.remove(this.lastcolor);
  document.getElementById("row6").classList.add(color);
  document.getElementById("row7").classList.remove(this.lastcolor);
  document.getElementById("row7").classList.add(color);
  this.lastcolor=color;
  }

  
}