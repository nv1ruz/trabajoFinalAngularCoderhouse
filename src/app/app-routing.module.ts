import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AutenticacionComponent } from './pages/autenticacion/autenticacion.component';


const routes: Routes = [

	{ path: '', component: HomeComponent },
	{ path: 'ingresar', component: AutenticacionComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
