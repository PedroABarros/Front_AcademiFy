import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.scss'],
})
export class NovoAlunoComponent implements OnInit {
  aluno = { id: null, nome: '', matricula: '', nascimento: '', dataHoraCadastro: '' };

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit(): void {}

  saveAluno() {
    if (this.aluno.id) {
      this.alunoService.editAluno(this.aluno).subscribe(() => {
        this.router.navigate(['/alunos']);
      });
    } else {
      this.alunoService.saveAluno(this.aluno).subscribe(() => {
        this.router.navigate(['/alunos']);
      });
    }
  }
}
