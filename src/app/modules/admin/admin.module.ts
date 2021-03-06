import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MovieListAdminComponent } from './pages/movie-list-admin/movie-list-admin.component';
import { CreateMovieAdminComponent } from './pages/create-movie-admin/create-movie-admin.component';
import { EditMovieAdminComponent } from './pages/edit-movie-admin/edit-movie-admin.component';
import { AllCartsComponent } from './pages/all-carts/all-carts.component';

@NgModule({
  declarations: [MovieListAdminComponent, CreateMovieAdminComponent, EditMovieAdminComponent, AllCartsComponent],
  imports: [CommonModule, ReactiveFormsModule, AdminRoutingModule],
})
export class AdminModule {}
