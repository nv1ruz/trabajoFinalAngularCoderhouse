import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
	private isEmail: RegExp = /^\S+@\S+\.\S+$/;
	public formularioRegistrar: FormGroup = this.fb.group(
		{
			email: new FormControl('', [Validators.required, Validators.pattern(this.isEmail)]),
			password: new FormControl('', [Validators.required]),
			password2: new FormControl('', [Validators.required]),
		}
	);
	public isWrongPassword: boolean = false;

	constructor(
		private fb: FormBuilder
	) { }

	ngOnInit(): void {
	}

	// 

	onSubmit(): void
	{
		console.log('Formulario registrar: ', this.formularioRegistrar.value);
	}

	handlerPassword(): void
	{
		const password = this.formularioRegistrar.controls['password'].value;
		const password2 = this.formularioRegistrar.controls['password2'].value;
		
		this.isWrongPassword = (password !== password2)? true: false;
	}

}
