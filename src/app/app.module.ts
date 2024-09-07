import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Ajusta la ruta según tu estructura

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configura las rutas en el módulo
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
