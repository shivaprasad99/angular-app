import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user-service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  email: string = "";
  bio: string = "";
  retry: boolean = false;
  form: FormGroup;

  constructor(private userService: UserService, public router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      bio: [''],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  submit() {
    this.userService.isAuthenticated().subscribe((res: any) => {
      if (!!res && res['success'] === true && this.form.valid) {
        this.router.navigate(['profile']);
      } else {
        this.retry = true;
        this.clear();
      }
    });
  }

  get f() { return this.form.controls; }

  clear() {
    this.form.reset();
  }

}
