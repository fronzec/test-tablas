import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {PersonasComponent} from "./people/personas.component";
import {GraphicsComponent} from "./graphics/graphics.component";
import {SwapitestService} from "./services/swapitest.service";


import {HttpModule} from "@angular/http";
import {FilterpeoplePipe} from "./pipes/filterpeople.pipe";

///Definimos las rutas de la aplicacion, {ruta,componente}
const appRoutes: Routes = [
  {path: '', component: PersonasComponent},///Ruta comodin, cuando no haya ningun segemento despues del nombre del dominio
];

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    GraphicsComponent,
    FilterpeoplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),///Inicializamos con nuestra constante de approot
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [SwapitestService],//sERVICIOES QUE CONSTRUYAMOS
  bootstrap: [AppComponent]///BOOSTRAP DE NUESTR APP, QUE COMPONENTE SE EJECUTARA AL INICIO
})
export class AppModule {
}
