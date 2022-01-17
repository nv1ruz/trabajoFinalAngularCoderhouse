import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCartsComponent } from './pages/all-carts/all-carts.component';
import { CreateMovieAdminComponent } from './pages/create-movie-admin/create-movie-admin.component';
import { EditMovieAdminComponent } from './pages/edit-movie-admin/edit-movie-admin.component';
import { MovieListAdminComponent } from './pages/movie-list-admin/movie-list-admin.component';

const routes: Routes = [
    { path: 'movies', component: MovieListAdminComponent },
    { path: 'movies/create', component: CreateMovieAdminComponent },
    { path: 'movies/:movieId', component: EditMovieAdminComponent },
    { path: 'all_carts', component: AllCartsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'movies' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
