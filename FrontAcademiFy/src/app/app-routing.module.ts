import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent }, // Página inicial
  { path: 'aluno', component: AlunoComponent }, // Página de alunos
  { path: 'novo-aluno', component: NovoAlunoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
