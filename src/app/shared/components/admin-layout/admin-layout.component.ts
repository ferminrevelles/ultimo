import { Component,OnInit,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { SigninService } from 'src/app/signin.service';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { OffersService } from '../../services/offers.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.template.html',
  styleUrls: ['./admin-layout.component.scss'],
  
})
export class AdminLayoutComponent implements OnInit {
 
  colorFondo:string;
  constructor(private configService:ConfigService, private cd : ChangeDetectorRef) {  }

  ngOnInit(){
    
   }


}
