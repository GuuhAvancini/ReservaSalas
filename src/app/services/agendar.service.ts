import { Http, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core'
import { Agendar } from "../models/agendar.model"
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { States } from '../models/states.model';
import { Branchs } from '../models/branch.model';


@Injectable()
export class AgendarService {

  private host: String = "http://localhost:49283/api/"

  constructor(private http: Http, private httpp:HttpClient) {
  }

  public getSalasFilter(stateid:number, filialid:number, datahorainicio:string, datahorafim:string):Promise<any[]>{
    var params = "?estado="+stateid+"&filial="+filialid+"&inicio="+datahorainicio+"&fim="+datahorafim;
    console.log("enviar para url: "+params)
    return this.http.get(this.host + 'rooms/filter'+params)
    .toPromise()
    .then((resposta: any) => resposta.json()["Rooms"])
  }

  public getSala(): Promise<Agendar[]> {
    return this.http.get(this.host + 'rooms')
      .toPromise()
      .then((resposta: any) => resposta.json()["Rooms"]
      )
  }

  public getFoto(path:String): Promise<any>{
    return this.http.get(this.host+"rooms/get?path="+path,)
    .toPromise()
    .then((result : any) => result.json()["image"])
  }

  public getSalasPorId(id: number): Promise<Agendar[]> {
    return this.http.get(this.host + `rooms/{id}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  // filtros

  public getEstado(estado: String): Promise<Agendar[]> {
    return this.http.get(`http://localhost:49283/salas/localidade={estado}`)
      .toPromise()
      .then((resposta: any) => {

        return resposta.json()
      })
  }

  public agendarSala(reserva) {
    console.log("no Serviço: " + JSON.stringify(reserva))
    let cpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpp.post(this.host + 'schedules', JSON.stringify(reserva), { headers: cpHeaders })
      .toPromise()
      .then((resposta: any) => {
        console.log("resposta do servidor" + JSON.stringify(resposta));
      })
  }

  public getStates(): Promise<States[]> {
    console.log("Entrei no serviço")
    console.log(this.host + 'states')
    return this.http.get(this.host + 'states')
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()["States"]
      })
  }

  public getBranchsByStateId(id: number): Promise<Branchs[]> {
    return this.http.get(this.host + 'states/' + id + '/branchs')
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()["Branchs"]
      })
  }


}
