import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private isEmail: RegExp = /^\S+@\S+\.\S+$/;
	public formularioLogin: FormGroup = this.fb.group(
		{
			email: new FormControl('', [Validators.required, Validators.pattern(this.isEmail)]),
			password: new FormControl('', [Validators.required]),
		}
	);

	constructor(
		private fb: FormBuilder,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	// 

	onSubmit(): void
	{
		console.log('Formulario login: ', this.formularioLogin.value);
		this.router.navigateByUrl('home');
	}

}
