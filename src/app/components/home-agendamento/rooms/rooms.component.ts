import { Component, OnInit } from '@angular/core';
import { AgendarService }  from '../../../api/agendar.service';
import { Agendar } from "../../../shared/agendar.modal"


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  public agendar: Agendar[]
  page = 1;

  closeResult: string;

  constructor(private agendarService: AgendarService) { }


  ngOnInit() {
    // this.agendar = this.agendarService.getSalas()
    //console.log(this.agendar)
    

    this.agendarService.getSalas()
      .then((salas: Agendar[]) => {
        console.log("a func 3segundos")
          this.agendar = salas;          
      })
     
      .catch( ( erro: any ) => {   
        console.log(erro)
      })
  }
}
