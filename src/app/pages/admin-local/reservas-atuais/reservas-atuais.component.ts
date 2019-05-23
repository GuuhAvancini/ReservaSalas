import { Component, OnInit } from '@angular/core';
import { LocalUser } from 'src/app/services/local-user.service';
import { AgendamentoLocal } from '../../../models/agendamento-room.model';
import { MinhasReservas } from 'src/app/models/reservas.model';
import { ReservasAll } from 'src/app/services/minhasreservas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas-atuais',
  templateUrl: './reservas-atuais.component.html',
  styleUrls: ['./reservas-atuais.component.scss'],
  providers: [LocalUser, ReservasAll]
})
export class ReservasAtuaisComponent implements OnInit {

  public reservas: MinhasReservas[]

  constructor(public controlRooms : LocalUser, private reserva: ReservasAll, private router: Router) { }



  ngOnInit() {  
    this.controlRooms.getSchedules()
    .then((agendamento: MinhasReservas[]) => {
      console.log(agendamento)
      this.reservas = agendamento
    })
  }

  deleteAgendamento(id){
    console.log(id)
    if(confirm("Tem certeza que deseja deletar esse agendamento?")){
    this.reserva.deleteUserById(id)
    alert('Reserva deletada com sucesso!')
    this.router.navigate(['/home']);
    }
  }

}
