import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Agendamento from '../models/Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http:HttpClient) { }

  buscarTodos(): Observable<Agendamento[]> {
      return this.http
      .get(`${environment.apiBaseUrl}api/agendamentos`)
      .pipe(map(x => <Agendamento[]>x))   
  }

  criar(agendamento: any) {
    return this.http.post(`${environment.apiBaseUrl}api/agendamentos`, agendamento);
  }
}
