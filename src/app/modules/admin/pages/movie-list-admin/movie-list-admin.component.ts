import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMovie } from 'src/app/data/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/services/movies-api.service';

@Component({
    selector: 'app-movie-list-admin',
    templateUrl: './movie-list-admin.component.html',
    styleUrls: ['./movie-list-admin.component.css'],
})
export class MovieListAdminComponent implements OnInit {
    public movies: IMovie[] = [];
    public moviesSubscription?: Subscription;
    public deleteMovieSubscription?: Subscription;

    constructor(private _moviesApi: MoviesApiService, private router: Router) {}

    ngOnInit(): void {
        this.loadMovies();
    }

    ngOnDestroy(): void {
        if (this.moviesSubscription) this.moviesSubscription.unsubscribe();
    }

    private loadMovies(): void {
        this.moviesSubscription = this._moviesApi.getMovies().subscribe((response) => {
            console.log(response);
            this.movies = response;
        });
    }

    public goToCreateMovie(): void {
        this.router.navigateByUrl('admin/movies/create');
    }

    public goToEditMovie(movieId: string): void {
        this.router.navigateByUrl(`admin/movies/${movieId}`);
    }

    public deleteMovie(movieId: string): void {
        this.deleteMovieSubscription = this._moviesApi
            .deleteMovieById(movieId)
            .subscribe((response) => {
                console.log(response);
                this.loadMovies();
            });
    }
}
