import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersApiService } from 'src/app/data/services/users-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private isEmail: RegExp = /^\S+@\S+\.\S+$/;
  public formularioLogin!: FormGroup;
  private loginSuscripcion?: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _usersApi: UsersApiService
  ) {}

  ngOnInit(): void {
    this.inicializarFormularioLogin();
  }

  ngOnDestroy(): void {
    if (this.loginSuscripcion) this.loginSuscripcion.unsubscribe();
  }

  //

  private inicializarFormularioLogin(): void {
    this.formularioLogin = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.isEmail),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.formularioLogin.valid) {
      this.loginSuscripcion = this._usersApi
        .login(
          this.formularioLogin.controls['email'].value,
          this.formularioLogin.controls['password'].value
        )
        .subscribe((response) => {
          console.log(response);
          this.router.navigateByUrl('');
        });
    }
  }
}
