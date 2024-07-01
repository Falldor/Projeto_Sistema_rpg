import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { habilidade } from '../model/habilidade.modal';
import { getHabildiades } from '../model/getHabilidades.modal';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private readonly API = 'http://localhost:3000/api/'

  constructor(private http:HttpClient) { }

  createHabilidade(habilidade:habilidade){
    return this.http.post(`${this.API}createHabilidade`, habilidade)
  }

  getHabilidadeType(habilidade:getHabildiades){
    return this.http.get<habilidade[]>(`${this.API}getAllHablidadesType?idJogador=${encodeURIComponent(habilidade.id)}&tipo=${encodeURIComponent(habilidade.tipo)}`)
  }

  async getNumberHabilidadesPlayer(habilidade:getHabildiades){
    return await this.http.get<boolean>(`${this.API}getNumberHabilidadesPlayer?id=${encodeURIComponent(habilidade.id)}&tipo=${encodeURIComponent(habilidade.tipo)}`).toPromise()
  }
}
