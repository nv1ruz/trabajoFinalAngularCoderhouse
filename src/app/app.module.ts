import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AutenticacionComponent } from './pages/autenticacion/autenticacion.component';
import { PeliculaDetalleComponent } from './pages/pelicula-detalle/pelicula-detalle.component';
import { PeliculasListadoComponent } from './pages/peliculas-listado/peliculas-listado.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MycartsComponent } from './pages/mycarts/mycarts.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegistroComponent,
        AutenticacionComponent,
        PeliculaDetalleComponent,
        PeliculasListadoComponent,
        CarritoComponent,
        MoviesListComponent,
        MovieDetailComponent,
        MycartsComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, SharedModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
