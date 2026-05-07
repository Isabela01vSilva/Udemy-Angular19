import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LugarService {
  constructor(private http: HttpClient) {}

  salvarLugar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>('http://localhost:3000/lugares', lugar);
  }

  obterLugares(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>('http://localhost:3000/lugares');
  }

  filtrarLugares(nome: string, categoria: string): Observable<Lugar[]> {
    let params = new HttpParams()
      
    if(nome) {
      params = params.set('nome_like', nome);
    }

    if(categoria && categoria !== '') {
      params = params.set('categoria', categoria);
    }

    return this.http.get<Lugar[]>('http://localhost:3000/lugares', { params });
  }
}
