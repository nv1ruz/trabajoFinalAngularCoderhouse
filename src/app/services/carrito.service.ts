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
		console.log(this._carrito.productos);
	}

	public quitarProducto(item: IPelicula): void
	{
		this._carrito.productos = this._carrito.productos.filter( producto => producto.id !== item.id );
		console.log(this._carrito.productos);
	}

	public obtenerProducto(itemId: number): IPelicula | undefined
	{
		return this._carrito.productos.find(item => item.id == itemId);
	}
}