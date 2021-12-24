import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMovieDataUpdate } from 'src/app/data/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/services/movies-api.service';

@Component({
    selector: 'app-edit-movie-admin',
    templateUrl: './edit-movie-admin.component.html',
    styleUrls: ['./edit-movie-admin.component.css'],
})
export class EditMovieAdminComponent implements OnInit {
    private movieId: string;
    private paramSubscription: Subscription;
    public formMovie: FormGroup = this.fb.group({
        id: new FormControl('', [Validators.required]),
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        year: new FormControl(2021, [Validators.required, Validators.min(0)]),
        image: new FormControl(''),
        rating: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
    });
    private movieSubscription: Subscription;
    private updateMovieSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
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
            this.formMovie.setValue({
                id: response.id,
                title: response.title,
                description: response.description,
                year: response.year,
                image: response.image,
                rating: response.rating,
            });
        });
    }

    public onSubmit(): void {
        if (this.formMovie) {
            const data: IMovieDataUpdate = {
                id: this.movieId,
                title: this.formMovie.controls['title'].value,
                description: this.formMovie.controls['description'].value,
                rating: Number(this.formMovie.controls['rating'].value),
                image: this.formMovie.controls['image'].value,
                year: Number(this.formMovie.controls['year'].value),
            };

            this.updateMovieSubscription = this._moviesApi
                .updateMovie(data)
                .subscribe((response) => {
                    console.log(response);
                    this.goBack();
                });
        }
    }

    public goBack(): void {
        this.router.navigateByUrl('admin/movies');
    }
}
