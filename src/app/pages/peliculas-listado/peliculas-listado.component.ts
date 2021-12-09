import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPelicula } from 'src/app/data/interfaces/peliculas.interface';
import { PeliculasApiService } from 'src/app/data/services/peliculas-api.service';
import { CarritoService } from 'src/app/services/carrito.service';


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
		private _carrito: CarritoService
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


	public agregarProducto(item: IPelicula): void
	{
		const producto = this._carrito.obtenerProducto(item.id);
		if(!producto){
			this._carrito.agregarProducto(item);
		} else{
			console.log('El producto ya está en el carrito!!');
		}
	}

	public quitarProducto(item: IPelicula): void
	{
		const producto = this._carrito.obtenerProducto(item.id);
		if(producto){
			this._carrito.quitarProducto(item);
		} else{
			console.log('El producto no está en el carrito!!');
		}
	}


	public verificarProductoEnCarrito(productoId: number): boolean
	{
		let resultado: boolean = false;
		if(this._carrito.carrito.productos.find(item => item.id == productoId)){
			return true;
		}
		return resultado;
	}
}
