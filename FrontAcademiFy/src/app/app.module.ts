import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Importação correta
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { PrincipalComponent } from './principal/principal.component';  // Importação correta

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent  // Adicionando o componente corretamente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Garantindo que o módulo de rotas foi importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
