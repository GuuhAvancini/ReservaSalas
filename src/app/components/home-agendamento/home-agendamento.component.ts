import { Component, OnInit } from '@angular/core';
import { AgendarService }  from '../../api/agendar.service';
import { Agendar } from "../../shared/agendar.modal"
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home-agendamento',
  templateUrl: './home-agendamento.component.html',
  styleUrls: ['./home-agendamento.component.css'],
  providers: [AgendarService]

})
export class HomeAgendamentoComponent implements OnInit {

 
  public reserva: Agendar[]
  public agendar: Agendar[]
  page = 1;

  closeResult: string;

  constructor(private agendarService: AgendarService, private modalService: NgbModal) { }

  // inicio modal  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
      alert("Reserva ralizado com sucesso")
    }, (reason) => {
      
      alert("Tem certerza que deseja cancelar a reserva?")
    });
  }

  onSelect(agendamento: Agendar[]){
    this.reserva = agendamento
    console.log("Aqui: " + this.reserva)
  }
  // fim modal

  ngOnInit() {
    
    this.agendarService.getSalas()
    .then(( salas: Agendar[]) => {
      console.log(salas)
      this.agendar = salas
    })
    .catch((params:any) => {
      console.log(params)
    })
  
  }

}
