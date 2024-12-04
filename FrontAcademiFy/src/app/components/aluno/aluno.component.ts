import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss'],
})
export class AlunoComponent implements OnInit {
  alunos: any[] = [];
  aluno = { id: null, nome: '', matricula: '', nascimento: '', dataHoraCadastro: '' };
  loading = false;
  errorMessage: string | null = null;

  constructor(private alunoService: AlunoService) {}

  ngOnInit() {
    this.loadAlunos();
  }

  loadAlunos() {
    this.loading = true;
    this.errorMessage = null;
    this.alunoService.getAlunos().subscribe(
      (data) => {
        this.alunos = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Erro ao carregar a lista de alunos.';
        this.loading = false;
      }
    );
  }

  saveAluno() {
    if (this.aluno.id) {
      this.alunoService.editAluno(this.aluno).subscribe(() => this.loadAlunos());
    } else {
      this.alunoService.saveAluno(this.aluno).subscribe(() => this.loadAlunos());
    }
    this.aluno = { id: null, nome: '', matricula: '', nascimento: '', dataHoraCadastro: '' };
  }

  editAluno(aluno: any) {
    this.aluno = { ...aluno };
  }

  deleteAluno(id: number) {
    this.alunoService.deleteAluno(id).subscribe(() => this.loadAlunos());
  }
}
