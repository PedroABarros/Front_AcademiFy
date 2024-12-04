import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private baseUrl = 'http://localhost:8080/aluno'; // URL da API

  constructor(private http: HttpClient) {}

  // Carregar todos os alunos
  getAlunos(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Salvar um novo aluno
  saveAluno(aluno: any): Observable<any> {
    return this.http.post(this.baseUrl, aluno);
  }

  // Editar um aluno existente
  editAluno(aluno: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${aluno.id}`, aluno);
  }

  // Deletar um aluno
  deleteAluno(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
