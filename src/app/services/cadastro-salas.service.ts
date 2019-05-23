import { Cadastrar, Room } from "../models/cadastrar-salas.model"
import { States } from "../models/states.model"
import { Branchs } from "../models/branch.model"
import { Injectable } from "@angular/core"
import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from "rxjs";
import { RoomType } from "../models/roomType.model";
import { Equipaments } from "../models/equipaments.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable()
export class CadastrarSalas {


  private host: String = "http://localhost:49283/api/"
  constructor(private http: Http, private http2: HttpClient) { }

  public cadastramentosalas(room: Room): Promise<any> {

    console.log("Estou no serviço")
    var json = JSON.stringify(room)
    
    const formData = new FormData();
    formData.append('name',room.Name);
    formData.append('branchId',room.BranchId.toString());
    formData.append('roomTypeId',room.RoomTypeId.toString());
    formData.append('capacity',room.Capacity.toString());
    formData.append('equipments',room.EquipmentsId.toString());
    formData.append('picture',room.Picture);

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    return this.http2.post(this.host + 'rooms', formData, {headers:headers})
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta)
        return resposta
      })
  }

  public cadastrarFoto(id: number, file: File): Observable<any> {
    console.log("Estou no serviço");
    console.log(id,file)
    console.log(file, file.name);

    const formData: FormData = new FormData();
    const endPoint = this.host + 'rooms/' + id + '/picture';
    console.log(endPoint);
    formData.append('Image', file, file.name);
    return this.http2.patch(endPoint,formData);
  }

  public getSala(): Promise<Cadastrar[]> {
    return this.http.get(this.host + 'rooms')
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()['Rooms']
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

  public getRoomType(): Promise<RoomType[]> {
    return this.http.get(this.host + 'roomtypes')
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()["Types"]
      })
  }

  public getEquipaments(): Promise<Equipaments[]> {
    return this.http.get(this.host + 'equipments')
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()["Equipments"]
      })
  }
}
