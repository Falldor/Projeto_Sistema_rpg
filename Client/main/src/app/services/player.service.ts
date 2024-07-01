import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { player } from '../model/player.model';
import { getHabildiades } from '../model/getHabilidades.modal';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private readonly API = 'http://localhost:3000/api/'

  constructor(private http:HttpClient) { }

  getAllType(tipo: string) {
    return this.http.get<player[]>(`${this.API}getAllType?tipo=${encodeURI(tipo)}`)
  }

  addNivel(jogador: getHabildiades){
    return this.http.put<string>(`${this.API}addNivel`, jogador)
  }

  getById(id:number){
    const params = new HttpParams().set('id', id);
    return this.http.get<any>(`${this.API}findbyId`,{params})
  }

  createElement(element:player){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post(`${this.API}createPlayer`,element,{ headers })
    
  }
}
