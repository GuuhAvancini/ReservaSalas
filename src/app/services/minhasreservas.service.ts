import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MinhasReservas } from '../models/reservas.model';
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable()
export class ReservasAll {


  constructor(private http: Http, private httpdel:HttpClient) {}



  public minhasReservas(id): Promise<MinhasReservas[]>{

    return this.http.get('http://localhost:49283/api/users/'+id+'/schedules ')
    .toPromise()
    .then((resposta: any) => resposta.json()["Schedules"]) 
}

deleteUserById(id):Promise<void> {
  let cpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

  return this.httpdel.delete('http://localhost:49283/api/schedules?id='+ id, { headers: cpHeaders })
  .toPromise()
  .then((resposta: any) => {
    console.log("resposta do servidor = "+ resposta);
  })
}

deleteRoomsById(id){
  let cpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  console.log("id: "+id)
  return this.httpdel.delete('http://localhost:49283/api/rooms?id='+ id, { headers: cpHeaders })
  .toPromise()
  .then((resposta: any) => {
    console.log("resposta do servidor = "+ resposta);
  })
}


}
