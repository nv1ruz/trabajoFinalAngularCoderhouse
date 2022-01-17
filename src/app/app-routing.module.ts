import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AutenticacionComponent } from './pages/autenticacion/autenticacion.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MycartsComponent } from './pages/mycarts/mycarts.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
    { path: 'ingresar', component: AutenticacionComponent },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'movies', component: MoviesListComponent },
            { path: 'movies/:movieId', component: MovieDetailComponent },
            { path: 'cart', component: CarritoComponent },
            { path: 'my_carts', component: MycartsComponent },
            {
                path: 'admin',
                canActivate: [AdminGuard],
                loadChildren: () =>
                    import('./modules/admin/admin.module').then((m) => m.AdminModule),
            },
            { path: '', pathMatch: 'full', redirectTo: 'movies' },
        ],
    },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
