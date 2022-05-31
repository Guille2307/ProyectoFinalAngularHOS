import { UserService } from './../../core/services/user/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  public signupForm?: FormGroup;
  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  public registerUser() {
    if (this.signupForm?.value) {
      this.userService.register(this.signupForm.value).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/login']);
      });
    }
  }
}
