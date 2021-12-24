import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMovieDataCreate } from 'src/app/data/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/services/movies-api.service';

@Component({
    selector: 'app-create-movie-admin',
    templateUrl: './create-movie-admin.component.html',
    styleUrls: ['./create-movie-admin.component.css'],
})
export class CreateMovieAdminComponent implements OnInit {
    public formNewMovie: FormGroup = this.fb.group({
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        year: new FormControl(2021, [Validators.required, Validators.min(0)]),
        image: new FormControl(''),
        rating: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
    });
    private createMovieSubscription: Subscription;

    constructor(
        private fb: FormBuilder,
        private _moviesApi: MoviesApiService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    ngOnDestroy(): void {
        if (this.createMovieSubscription) this.createMovieSubscription.unsubscribe();
    }

    public onSubmit(): void {
        if (this.formNewMovie.valid) {
            const data: IMovieDataCreate = {
                title: this.formNewMovie.controls['title'].value,
                description: this.formNewMovie.controls['description'].value,
                rating: Number(this.formNewMovie.controls['rating'].value),
                image: this.formNewMovie.controls['image'].value,
                year: Number(this.formNewMovie.controls['year'].value),
            };

            this.createMovieSubscription = this._moviesApi
                .createMovie(data)
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
