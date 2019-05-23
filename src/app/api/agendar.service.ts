import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Agendar } from "../shared/agendar.modal"


@Injectable()
export class AgendarService{

      constructor(private http: Http) {

      }
      public getSalas(): Promise<Agendar[]> {
         return this.http.get('http://localhost:3000/salas')
            .toPromise()
            .then((resposta: any) => resposta.json())
         
      }

      public getSalasPorId(id: number): Promise<Agendar[]> {
            return this.http.get(`http://localhost:3000/salas/${id}`)
            .toPromise()
            .then((resposta: any) => resposta.json())
      }

}