import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component';

const routes: Routes = [
  { path: 'alunos', component: AlunoComponent },
  { path: 'home', component: PrincipalComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: 'novo-aluno', component: NovoAlunoComponent },
  { path: 'editar-aluno/:id', component: NovoAlunoComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
