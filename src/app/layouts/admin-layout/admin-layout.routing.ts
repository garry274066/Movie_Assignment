import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { AddMoviesComponent } from '../../pages/add-movies/add-movies.component';
import { MovieDetailsComponent } from '../../pages/movie-details/movie-details.component'


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
 
    { path: 'addmovies',      component: AddMoviesComponent },
    { path: 'moviedetails',   component:MovieDetailsComponent}
];
