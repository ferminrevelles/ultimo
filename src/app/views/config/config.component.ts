import {AfterViewInit,OnDestroy, Component, OnInit,Inject,EventEmitter,Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';
import * as countries from '../../shared/models/countries.json';
import * as languages from '../../shared/models/languages.json';
import { ConfigService } from '../../shared/services/config.service';

export interface DialogData {
  
  name: string;
}


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  @Output() cambiocolorbackground = new EventEmitter<any>();
  @Output() cambiocolorlink = new EventEmitter<any>();
  notification= new FormControl();
  menssage: String;
  rForm: FormGroup;
  selectedLanguage = 'es';
  ciudad = countries.countries;
  languages = languages.languages;
  dashboardColor = ["lightgrey","blue","red","purple"];
  

  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,
    private translateService: TranslateService, private configService: ConfigService) {
    
    //this.translateService.addLangs(['es', 'en']);
    //this.translateService.setDefaultLang('en');
  

  /*  const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/es|en/) ? browserLang : 'en');*/
   }

  ngOnInit(){
    this.loadForm();
   }

   public loadForm(): void {
    this.rForm = new FormGroup({
      country: new FormControl(''),
      language: new FormControl('', ),
      notification: new FormControl('', ),
      colores: new FormControl('', ),
      coloreslink: new FormControl('lightgrey', ),
    });
  }

  config(){
    console.log(this.rForm.value.colores);
    console.log(this.rForm.value.coloreslink);
    this.cambiocolorbackground.emit(this.rForm.value.colores);
    this.cambiocolorlink.emit(this.rForm.value.coloreslink);

  }
  toogleLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translateService.use(lang);
  }

  openDialog(): void {
    if (this.notification.value == true) this.menssage="Activación de notificaciones";
    else this.menssage="Desactivación de notificaciones";

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px',
      data: {name: this.menssage}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   
    });
  }

 /*     onChange() {
        if (this.notification.value == true){
          this._snackBar.open('Notificaciones activadas','', {   duration: 2000,   });
        }
        else{
          this._snackBar.open('Notificaciones desactivadas','', {   duration: 2000,   });
        }
   
  }*/ 
  
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA)  public data: DialogData) {}

  Accept(): void {
    this.dialogRef.close();
  }

}