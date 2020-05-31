import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { ProfileStudyComponent } from './profile-student/study/profile-study.component';
import { ProfileStudySmartComponent } from './profile-student/study/profile-study-smart.component';
import { VocationalFormComponent } from './profile-student/study/vocational-form/vocational-form.component';
import { UniversityDegreeComponent } from './profile-student/study/university-degree-form/university-degree-form.component';
import { ProfileLanguageComponent } from './profile-student/language/profile-language.component';
import { ProfileLanguageSmartComponent }from './profile-student/language/profile-language-smart.component';
import { ProfileAccountComponent } from './profile-student/account/profile-account.component';
import { ProfileAccountSmartComponent } from './profile-student/account/profile-account-smart.component';
import { WorkExperiencieComponent } from './profile-student/work-experience/work-experiencie.component';
import { WorkExperiencieSmartComponent } from './profile-student/work-experience/work-experiencie-smart.component';
import { MaterialModule } from '../../material-module';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileStudentComponent,
    
    ProfileStudyComponent,
    ProfileStudySmartComponent,
    VocationalFormComponent,
    UniversityDegreeComponent,
    ProfileLanguageComponent,
    ProfileLanguageSmartComponent,
    ProfileAccountComponent,
    ProfileAccountSmartComponent,
    WorkExperiencieComponent,
    WorkExperiencieSmartComponent,
  
  ],
  imports: [SharedModule, ProfileRoutingModule,MaterialModule]
})
export class ProfileModule {}
