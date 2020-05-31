import { Component,ChangeDetectionStrategy,Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Store } from '@ngrx/store';
import * as UserActions from '../../../shared/state/user/actions/user.actions';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileStudentComponent implements OnInit {
  @Input() user:User;
  
  displayedColumnsFormation: string[] = ['tipo','nivel','title','institution','date','certificate','bilingue','dual','action'];
  displayedColumnsExperience: string[] = ['empresa','date_incio','date_fin','puesto','tareas','action'];
  displayedColumnsLanguage: string[] = ['level','language','date','action'];
  
  constructor(private store$:Store) {}
 
  ngOnInit(){
    console.log(this.user.studies);
  }

  deleteStudy(studyID: any) {
    const studies = [...this.user.studies];
    const uid = studies.findIndex(study => study.uid === studyID);
    studies.splice(uid,1);
    
    const user = {...this.user,studies};
    this.store$.dispatch(new UserActions.Update(user));
    console.log(this.user);
    
  }
  deleteLanguage(languageID: any) {
    const languages = [...this.user.languages];
    const uid = languages.findIndex(language=>language.uid === languageID);
    languages.splice(uid,1);

    const user = {...this.user,languages};
    this.store$.dispatch(new UserActions.Update(user));
    console.log(this.user);
  }

  deleteExperiencie(experiencieID: any) {
    const experiencies = [...this.user.experiencies];
    const uid = experiencies.findIndex(experiencie=>experiencie.uid === experiencieID);
    experiencies.splice(uid,1);

    const user = {...this.user,experiencies};
    this.store$.dispatch(new UserActions.Update(user));
    console.log(this.user);
  }
}
