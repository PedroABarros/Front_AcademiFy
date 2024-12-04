import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private baseUrl = 'http://localhost:8080/api/aluno';

  constructor(private http: HttpClient) {}

  
  getAlunos(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl);
  }

  
  saveAluno(aluno: any): Observable<any> {
    return this.http.post(this.baseUrl, aluno);
  }

  
  editAluno(aluno: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${aluno.id}`, aluno);
  }

  
  deleteAluno(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
