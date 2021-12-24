import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMovie } from 'src/app/data/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/services/movies-api.service';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
    private movieId: string;
    public movie: IMovie;
    private paramSubscription?: Subscription;
    private movieSubscription?: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _moviesApi: MoviesApiService
    ) {}

    ngOnInit(): void {
        this.getParam();
    }

    ngOnDestroy(): void {
        if (this.paramSubscription) this.paramSubscription.unsubscribe();
        if (this.movieSubscription) this.movieSubscription.unsubscribe();
    }

    private getParam(): void {
        this.paramSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
            this.movieId = params.get('movieId')!;
            this.loadMovie(this.movieId);
        });
    }

    private loadMovie(movieId: string): void {
        this.movieSubscription = this._moviesApi.getMovieById(movieId).subscribe((response) => {
            this.movie = response;
        });
    }

    public goBack(): void {
        this.router.navigateByUrl('movies');
    }
}
