import { Injectable } from '@angular/core';
import { ICartDataCreate } from '../data/interfaces/carts-api.interface';
import { IMovie } from '../data/interfaces/movies-api.interface';
import { IPelicula } from '../data/interfaces/peliculas.interface';
import { CarritoApiService } from '../data/services/carrito-api.service';
import { UsersApiService } from '../data/services/users-api.service';

export interface ICarrito {
    productos: IMovie[];
}

@Injectable({
    providedIn: 'root',
})
export class CarritoService {
    private _carrito: ICarrito = {
        productos: [],
    };

    constructor(private _carritoApi: CarritoApiService, private _usersApi: UsersApiService) {}

    get carrito(): ICarrito {
        return this._carrito;
    }

    public agregarProducto(item: IMovie): void {
        this._carrito.productos.push(item);
        console.log(this._carrito.productos);
    }

    public quitarProducto(item: IMovie): void {
        this._carrito.productos = this._carrito.productos.filter(
            (producto) => producto.id !== item.id
        );
        console.log(this._carrito.productos);
    }

    public obtenerProducto(itemId: string): IMovie | undefined {
        return this._carrito.productos.find((item) => item.id == itemId);
    }

    public realizarCompra(): void {
        const data: ICartDataCreate = {
            user: this._usersApi.user.id,
            movies: this._carrito.productos,
        };

        const suscripcion = this._carritoApi.createCart(data).subscribe((response) => {
            console.log(response);
            this._carrito.productos = [];
            if (suscripcion) suscripcion.unsubscribe();
        });
    }
}
