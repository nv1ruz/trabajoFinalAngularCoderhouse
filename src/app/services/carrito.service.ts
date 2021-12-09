import { Injectable } from '@angular/core';
import { IPelicula } from '../data/interfaces/peliculas.interface';

export interface ICarrito{
	productos: IPelicula[];
	direccion_envio: string;
}

@Injectable({
	providedIn: 'root'
})
export class CarritoService {
	private _carrito: ICarrito = {
		productos: [],
		direccion_envio: '',
	};


	constructor() { }

	get carrito(): ICarrito{
		return this._carrito;
	}


	public agregarProducto(item: IPelicula): void
	{
		this._carrito.productos.push(item);
	}

	public quitarProducto(item: IPelicula): void
	{
		this._carrito.productos = this._carrito.productos.filter( producto => producto.id !== item.id );
	}
}
