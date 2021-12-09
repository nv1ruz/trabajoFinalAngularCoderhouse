import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	@Input() title: string = 'Coderhouse';

	constructor(
		private router: Router
	) { }

	ngOnInit(): void {
	}

	irHome(): void
	{
		this.router.navigateByUrl('');
	}

	irCarrito(): void
	{
		this.router.navigateByUrl('carrito');
	}
}
