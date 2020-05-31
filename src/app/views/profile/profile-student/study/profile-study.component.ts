import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  Study,
  VocationalStudy,
  CollegeStudy
} from 'src/app/shared/models/study.model';
import { MockData } from 'src/app/shared/mock-data';
import { User } from 'src/app/shared/models/user.model';
import { Store } from '@ngrx/store';
import * as UserActions from '../../../../shared/state/user/actions/user.actions';

@Component({
  selector: 'app-profile-study',
  templateUrl: './profile-study.component.html',
  styleUrls: ['./profile-study.component.scss']
})
export class ProfileStudyComponent implements OnInit {
  @Input() user:User;
  studiesForm: FormGroup;
  options = MockData.TYPE_STUDIES;
  study: Study = {} as (VocationalStudy | CollegeStudy);
  uid:number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store$: Store<User>
  ) {
    this.route.params.subscribe(params => {
    //  Obtiene el identificador pasado por parámetro de la URL (así sabremos si hay que update o create experiencie)
      this.uid = +params.uid;
    });
  }

  ngOnInit() {
    console.log(this.user);
    this.study = (this.user.studies.find(study => study.uid === this.uid) || {}) as | VocationalStudy| CollegeStudy;
    this.studiesForm = new FormGroup({
      option: new FormControl(this.study.level, [Validators.required])
    });
  }
  compareOption(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }

  private update(study: VocationalStudy | CollegeStudy) {
    const studies = this.user.studies.map(_study=>
    _study.uid === study.uid ? study : _study )
    
    const user = {...this.user,studies};

    this.store$.dispatch(new UserActions.Update(user));
  }
  private save(study: VocationalStudy | CollegeStudy) {
   const _study = MockData.fakeIncreaseID<VocationalStudy | CollegeStudy>(this.user.studies,study);

   console.log (_study);
   const studies = [...this.user.studies,_study]; //Crea un Array studies añadiendo el _study a los this.user.studies existentes
   const user = {...this.user,studies}; // Sustituye la propiedad de this.user por el nuevo array de studies creado

   this.store$.dispatch(new UserActions.Update(user));
  }

  saveOrUpdate(study: VocationalStudy | CollegeStudy) {
    study.level = this.studiesForm.get('option').value;
    this.isNew() ? this.save(study) : this.update(study);
  }
  public isNew(): boolean {
    return !!!this.study.uid;
  }
  public isSelectVocational(): boolean {
    const value = this.studiesForm.get('option').value;
    return value && value.uid === MockData.TYPE_STUDIES[0].uid;
  }
  public isSelectUniversity(): boolean {
    const value = this.studiesForm.get('option').value;
    return value && value.uid === MockData.TYPE_STUDIES[1].uid;
  }
  public backProfile() {
    this.router.navigate(['/admin/profile']);
  }
}
