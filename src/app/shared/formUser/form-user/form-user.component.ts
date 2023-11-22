import { UserService } from './../../../core/services/user/user.service';
import { ILogin } from './../../../core/services/models/hero.model';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  @Input() public user?: ILogin;
  public userForm?: FormGroup;
  public error?: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: new FormControl('', []),
      password: new FormControl('', [Validators.required]),
    });
  }
  public loginUser() {
    if (this.userForm?.valid) {
      this.userService
        .login(this.userForm.value)
        .pipe()
        .subscribe({
          next: (res) => {
            ('');
          },
          error: (err) => (this.error = err.error.message),
        });
    }
    Swal.fire('You are logged in', '', 'success');
  }
}
