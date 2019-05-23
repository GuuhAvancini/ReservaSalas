import { Injectable } from "@angular/core";
import { UserAdd, userAll } from '../models/user.add.module';
import { Http, RequestOptions } from "@angular/http";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class UserAddService {

  private url = "http://localhost:49283/api/users"

  constructor(private http: HttpClient) { }

  public adicionarUsuario(useradd) {
    console.log("no Serviço: " + JSON.stringify(useradd))
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url,  JSON.stringify(useradd), { headers: reqHeader })
      .toPromise()
      .then((resposta: any) => {
        console.log("resposta do servidor" + JSON.stringify(resposta));
      })

  }
  public getAllUser(): Promise<userAll[]> {

    return this.http.get('http://localhost:49283/api/users/')
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta["Users"]);
        JSON.stringify(resposta)

        return resposta["Users"];
      })
  }
  
  public getAllUserById(id : String): Promise<userAll[]> {
    console.log(id)
    return this.http.get('http://localhost:49283/api/users/'+ id)
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta);
        return resposta;
      })
  }


  public getAllFiliais(): Promise<any[]> {

    return this.http.get('http://localhost:49283/api/branchs ')
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta);
        return resposta["Branchs"];
      })

  }

  deleteUserById(id):Promise<void> {
    let cpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.delete('http://localhost:49283/api/users?id='+ id, { headers: cpHeaders })
    .toPromise()
    .then((resposta: any) => {
      console.log("resposta do servidor");
    })
  }

  public getAllSignatures(): Promise<any[]> {

    return this.http.get('http://localhost:49283/api/signatures  ')
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta);
        return resposta["Signatures"];
      })
    }


}
