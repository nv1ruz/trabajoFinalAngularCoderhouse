import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AutenticacionComponent } from './pages/autenticacion/autenticacion.component';
import { PeliculaDetalleComponent } from './pages/pelicula-detalle/pelicula-detalle.component';
import { PeliculasListadoComponent } from './pages/peliculas-listado/peliculas-listado.component';
import { CarritoComponent } from './pages/carrito/carrito.component';


const routes: Routes = [

	{ path: 'ingresar', component: AutenticacionComponent },
	{ 
		path: '', component: HomeComponent,
		children: [
			{ path: 'peliculas', component: PeliculasListadoComponent },
			{ path: 'peliculas/:pelicula_id', component: PeliculaDetalleComponent },
			{ path: 'carrito', component: CarritoComponent },
			{ path: '', pathMatch: 'full', redirectTo: 'peliculas' }
		]
	},
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
