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
    if (this.aluno.matricula.length !== 10) {
      alert('A matrícula deve ter 10 caracteres');
      return;
    }

    this.alunoService.saveAluno(this.aluno).subscribe(
      (response) => {
        alert('Aluno foi salvo');
        console.log('Aluno salvo', response);

        this.router.navigate(['/']); 
      },
      (error) => {
        console.error('Erro ao salvar aluno', error);
      }
    );
    
  };
  editarAluno(id: number) {
    this.router.navigate(['/editar-aluno', id]);
  };
}
