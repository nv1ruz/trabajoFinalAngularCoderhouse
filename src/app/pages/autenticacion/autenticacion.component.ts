import { Component, OnInit } from '@angular/core';
import { ITab } from 'src/app/modules/shared/components/tabs/tabs.component';

@Component({
	selector: 'app-autenticacion',
	templateUrl: './autenticacion.component.html',
	styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit {
	public tabs: ITab[] = [
		{
			id: 1,
			nombre: 'Login'
		},
		{
			id: 2,
			nombre: 'Registrar cuenta'
		},
	]
	public tabSeleccionado?: ITab;

	constructor() { }

	ngOnInit(): void {
	}

}
