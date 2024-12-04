import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Incluindo o AppRoutingModule
import { AppComponent } from './app.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalComponent } from './principal/principal.component';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component'; // Incluindo o PrincipalComponent

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    NavbarComponent,
    PrincipalComponent,
    NovoAlunoComponent // Declarando o PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
