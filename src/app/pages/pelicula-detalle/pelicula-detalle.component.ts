import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IPelicula } from 'src/app/data/interfaces/peliculas.interface';
import { PeliculasApiService } from 'src/app/data/services/peliculas-api.service';

@Component({
	selector: 'app-pelicula-detalle',
	templateUrl: './pelicula-detalle.component.html',
	styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {
	private peliculaId?: number;
	public pelicula?: IPelicula;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private _peliculasApi: PeliculasApiService
	) { }

	ngOnInit(): void {
		this.obtenerParametro();
	}


	private obtenerParametro(): void
	{
		this.route.paramMap.subscribe(
			(params: ParamMap) => {
				this.peliculaId = +params.get('pelicula_id')!;
				this.cargarPelicula(this.peliculaId);
			}
		);
	}


	private cargarPelicula(peliculaId: number): void
	{
		const response = this._peliculasApi.obtenerPeliculaPorId(peliculaId);
		if(response){
			this.pelicula = response;
		} else{
			console.log('La pelicula no existe');
		}
	}


	public volver(): void
	{
		this.router.navigateByUrl('peliculas');
	}
}
