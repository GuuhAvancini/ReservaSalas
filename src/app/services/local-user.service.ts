import { Injectable } from "@angular/core";
import { ControleDeSalasLocais } from "../models/control-rooms.model";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { AgendamentoLocal } from '../models/agendamento-room.model';
import { Http } from "@angular/http";

@Injectable()
export class LocalUser {

  constructor(private http: Http) { }

  public getAllRoomsControl(): Promise<any[]> {

    return this.http.get('http://localhost:49283/api/rooms')
      .toPromise()
      .then((resposta: any) => {return resposta.json()["Rooms"]
      })
  }
  public getSchedules(): Promise<any[]> {
    return this.http.get('http://localhost:49283/api/schedules')
      .toPromise()
      .then((resposta: any) => resposta.json()["Schedules"]
      )
  }
}
