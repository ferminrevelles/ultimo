import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  loginForm: FormGroup;
  submitted = false;
  errorLogin = false;
  @Input() state:any;
  @Output() login = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.login.emit(this.loginForm.value);
  }
  getErrorMessageEmail() {
  if (this.loginForm.value.email=="") {
        return 'You must enter a value';
      }
        return 'Not a valid email';
    }
    getErrorMessagePassword() {
      if (this.loginForm.value.password=="") {
            return 'You must enter a value';
          }
        return "You must enter a value";
      }
}
