import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UserActions from '../../shared/state/user/actions/user.actions';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  rememberForm: FormGroup;
  submitted = false;
  errorLogin = false;
  @Input() user:User;
  @Input() state:any;
  @Output() remember = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder,private store$: Store<User>
  ) {}


  ngOnInit() {
    this.rememberForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });
    console.log(this.state);
  }

  onSubmit() {
    this.submitted = true;
    this.remember.emit(this.rememberForm.value);
  }

}
