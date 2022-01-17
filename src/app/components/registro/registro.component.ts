import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersApiService } from 'src/app/data/services/users-api.service';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
    private isEmail: RegExp = /^\S+@\S+\.\S+$/;
    public formularioRegistrar!: FormGroup;
    public isWrongPassword: boolean = false;
    private registerSubscription?: Subscription;

    constructor(
        private fb: FormBuilder,
        private _usersApi: UsersApiService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.inicializarFormularioRegistrar();
    }

    ngOnDestroy(): void {
        if (this.registerSubscription) this.registerSubscription.unsubscribe();
    }

    //

    private inicializarFormularioRegistrar(): void {
        this.formularioRegistrar = this.fb.group({
            email: new FormControl('', [Validators.required, Validators.pattern(this.isEmail)]),
            password: new FormControl('', [Validators.required]),
            password2: new FormControl('', [Validators.required]),
        });
    }

    onSubmit(): void {
        if (this.formularioRegistrar.valid) {
            this.registerSubscription = this._usersApi
                .register(
                    this.formularioRegistrar.controls['email'].value,
                    this.formularioRegistrar.controls['password'].value
                )
                .subscribe((response) => {
                    console.log(response);
                    this.router.navigateByUrl('');
                });
        }

        console.log('Formulario registrar: ', this.formularioRegistrar.value);
    }

    handlerPassword(): void {
        const password = this.formularioRegistrar.controls['password'].value;
        const password2 = this.formularioRegistrar.controls['password2'].value;

        this.isWrongPassword = password !== password2 ? true : false;
    }
}
