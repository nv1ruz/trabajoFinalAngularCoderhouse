import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMovie } from 'src/app/data/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/services/movies-api.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
    public movies: IMovie[] = [];
    private moviesSubscription: Subscription;

    constructor(
        private _moviesApi: MoviesApiService,
        private router: Router,
        private _carrito: CarritoService
    ) {}

    ngOnInit(): void {
        this.loadMovies();
    }

    ngOnDestroy(): void {
        if (this.moviesSubscription) this.moviesSubscription.unsubscribe();
    }

    private loadMovies(): void {
        this.moviesSubscription = this._moviesApi.getMovies().subscribe((response) => {
            this.movies = response;
        });
    }

    public agregarProducto(movie: IMovie): void {
        const producto = this._carrito.obtenerProducto(movie.id);
        if (!producto) {
            this._carrito.agregarProducto(movie);
        } else {
            console.log('El producto ya está en el carrito!!');
        }
    }

    public quitarProducto(movie: IMovie): void {
        const producto = this._carrito.obtenerProducto(movie.id);
        if (producto) {
            this._carrito.quitarProducto(movie);
        } else {
            console.log('El producto no está en el carrito!!');
        }
    }

    public verificarProductoEnCarrito(movieId: string): boolean {
        let resultado: boolean = false;
        if (this._carrito.carrito.productos.find((item) => item.id == movieId)) {
            return true;
        }
        return resultado;
    }

    public goToDetail(movieId: string): void {
        this.router.navigateByUrl(`/movies/${movieId}`);
    }
}
