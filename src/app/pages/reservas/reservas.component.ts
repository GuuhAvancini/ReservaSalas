import { Component, OnInit } from '@angular/core';
import {ReservasAll } from '../../services/minhasreservas.service';
import { MinhasReservas } from '../../models/reservas.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
  providers: [ReservasAll]

})
export class ReservasComponent implements OnInit {

  public minhasreservas: MinhasReservas[]

  usuarioId = window.localStorage.getItem('UserId');

  constructor(private reservas: ReservasAll, private router: Router) { }

  ngOnInit() {
    this.reservas.minhasReservas(this.usuarioId)
    .then(( reserv: MinhasReservas[]) => {
      this.minhasreservas = reserv
      console.log(this.minhasreservas)
      
    })
    .catch((params:any) => {
      console.log(params)
    })
  }

  deleteAgendamento(id){
    if(confirm("Tem certeza que deseja deletar esse agendamento?")){
    this.reservas.deleteUserById(id)
    alert('Reserva deletada com sucesso!')
    this.router.navigate(['/home']);
    }
  }

}
