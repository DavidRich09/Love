import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import {ShowComponent} from './show/show.component';

export const routes: Routes = [
  {path: 'show', component: ShowComponent},
  {path: '', redirectTo: '/show', pathMatch: 'full'}
];
