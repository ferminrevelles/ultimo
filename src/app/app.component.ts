import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UOCJob';

  constructor(private swUpadte:SwUpdate) { }
  
  ngOnInit() {
    if (this.swUpadte.isEnabled){
      this.swUpadte.available.subscribe( ()=>{
        if (confirm("Nueva versión disponible. ¿Descargar nueva versión?")){
          window.location.reload();
        }
      })
    }
  }
}
