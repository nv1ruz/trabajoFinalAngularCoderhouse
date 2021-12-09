import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPelicula } from 'src/app/data/interfaces/peliculas.interface';
import { PeliculasApiService } from 'src/app/data/services/peliculas-api.service';


@Component({
	selector: 'app-peliculas-listado',
	templateUrl: './peliculas-listado.component.html',
	styleUrls: ['./peliculas-listado.component.css']
})
export class PeliculasListadoComponent implements OnInit {
	public peliculas: IPelicula[] = [];

	constructor(
		private _peliculasApi: PeliculasApiService,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.cargarPeliculas();
	}


	private cargarPeliculas(): void
	{
		this.peliculas = this._peliculasApi.obtenerPeliculas();
	}

	
	public verDetallePelicula(peliculaId: number): void
	{
		this.router.navigateByUrl(`/peliculas/${peliculaId}`);
	}
}
