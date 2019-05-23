import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Login } from '../models/login';



@Injectable()
export class UserService {

  private url: string = 'http://localhost:49283/api/users/authentication';

  mostrarAdmLocalEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  autentica(login: Login) {
    var data = 'Email=' + login.email + "&Password=" + login.password + "&grant_type=password";
    console.log(data);
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    console.log(reqHeader)
    return this.http.post(this.url, data, { headers: reqHeader })

  }

}
