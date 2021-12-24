import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AutenticacionComponent } from './pages/autenticacion/autenticacion.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
// import { PeliculaDetalleComponent } from './pages/pelicula-detalle/pelicula-detalle.component';
// import { PeliculasListadoComponent } from './pages/peliculas-listado/peliculas-listado.component';

const routes: Routes = [
    { path: 'ingresar', component: AutenticacionComponent },
    {
        path: '',
        component: HomeComponent,
        children: [
            // { path: 'peliculas', component: PeliculasListadoComponent },
            // { path: 'peliculas/:pelicula_id', component: PeliculaDetalleComponent },
            { path: 'movies', component: MoviesListComponent },
            { path: 'movies/:movieId', component: MovieDetailComponent },
            { path: 'cart', component: CarritoComponent },
            {
                path: 'admin',
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
