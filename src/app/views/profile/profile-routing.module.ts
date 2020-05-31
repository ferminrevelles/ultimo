import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileStudySmartComponent } from './profile-student/study/profile-study-smart.component';
import { ProfileLanguageSmartComponent } from './profile-student/language/profile-language-smart.component';
import { ProfileAccountSmartComponent } from './profile-student/account/profile-account-smart.component';
import { WorkExperiencieSmartComponent } from './profile-student/work-experience/work-experiencie-smart.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'profile-student/account',
    component: ProfileAccountSmartComponent
  },
  {
    path: 'profile-student/study',
    component: ProfileStudySmartComponent
  },
  {
    path: 'profile-student/study/:uid',
    component: ProfileStudySmartComponent
  },
  {
    path: 'profile-student/language',
    component: ProfileLanguageSmartComponent
  },
  {
    path: 'profile-student/language/:uid',
    component: ProfileLanguageSmartComponent
  },
  {
  path: 'profile-student/work-experiencie',
  component: WorkExperiencieSmartComponent
  },
  {
  path: 'profile-student/work-experiencie/:uid',
  component: WorkExperiencieSmartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
