import { Cadastrar } from "../shared/cadastrar-salas.model"
import {Injectable } from "@angular/core"
import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from "rxjs";

@Injectable()
export class CadastrarSalas{

        constructor(private http: Http) {}

        public cadastramentosalas( cadastrar : Cadastrar): Observable<any>{

            let headers: Headers = new Headers()

            headers.append('Content-type', 'application/json')

            return this.http.post('http://localhost:3000/salas',
            JSON.stringify(cadastrar),
            new RequestOptions({headers: headers})
        )   
  
        }

}