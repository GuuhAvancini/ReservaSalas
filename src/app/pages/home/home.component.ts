import { ControleFilialComponent } from './../admin-master/controle-filial/controle-filial.component';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AgendarService } from 'src/app/services/agendar.service';
import { Agendar } from 'src/app/models/agendar.model';
import { CookieService } from 'ngx-cookie-service';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Reserva } from 'src/app/models/reservas.model';
import { Branch } from 'src/app/models/branch.token.model';
import { CadastrarSalas } from 'src/app/services/cadastro-salas.service';
import { States } from 'src/app/models/states.model';
import { Branchs } from 'src/app/models/branch.model';
import { empty } from 'rxjs';
import { emitKeypressEvents } from 'readline';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AgendarService]
})
export class HomeComponent implements OnInit {

  //filtros para carregar as salas
  //Comentário para João
  date = new Date();
  ano = this.date.getFullYear();
  mes = this.date.getMonth() + 1;
  dia = this.date.getDate();
  hour = this.date.getHours();
  minutes = this.date.getMinutes();
  dateFilter: String= this.ano.toString()+"-"+this.mes.toString()+"-"+this.dia.toString();
  hourFilter: String =this.hour.toString()+":"+this.minutes.toString();
  userBranchId = window.localStorage.getItem('userbranchId');
  userStateId = window.localStorage.getItem('userstateId');

  //filtros
  states: States[]
  branch: Branchs[]

  //Salas  
  public agendar: Agendar[]
  public reserva: Agendar
  public foto: any;
  agendamento: Reserva
  public estado : string 

  //Cookie IdUser
  usuarioId = window.localStorage.getItem('UserId');

  //paginação
  pageActual: Number = 1;
  public pages: Array<number>;
  page = 1;  
  value: boolean = false;
  totalItems = 10;
  currentPage = 3;

  //modal
  modalRef: BsModalRef;



  constructor(private _sanitizer: DomSanitizer,private modalService: BsModalService, private agendarService: AgendarService) {
    this.ngOnInit()
  }

  //carrega o campo Estado e as salas disponiveis 
  ngOnInit() {
    this.agendarService.getStates()
      .then((estado: States[]) => {
        console.log(estado)
        this.states = estado
      })
      .catch((params:any) => {
        console.log(params)
      })
      
      if(this.hour < 10 && this.minutes < 10){
        var dateTimeInicio = this.dateFilter+"T0"+this.hour+":0"+this.minutes               
        console.log(dateTimeInicio)
      }else if(this.hour < 10){
        var dateTimeInicio = this.dateFilter+"T0"+this.hour+":"+this.minutes
        console.log(dateTimeInicio)
      }else if(this.minutes < 10){
        var dateTimeInicio = this.dateFilter+"T"+this.hour+":"+"0"+this.minutes 
      }else
      {
        var dateTimeInicio = this.dateFilter+"T"+this.hourFilter
      }
      var dateTimeFim = this.dateFilter+"T21:00"

      console.log(dateTimeInicio)
    this.agendarService.getSalasFilter(parseInt(this.userStateId,36),parseInt(this.userBranchId,36),dateTimeInicio,dateTimeFim)
    .then((salas: Agendar[])=> {
      console.log(salas)
      this.agendar = salas

      for(let data of salas){
        this.agendarService.getFoto(data.RoomPicture).then((response : string) => {
          data.RoomPicture = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
          + response)
        })
      }
      console.log(this.agendar)
    })
    .catch((params: any) => {
      console.log(params)
    })
  }

  //Busca as Filiais do Estado Selecionado
  onSelectState(id: number)
  {
    if(id == 0){ }
    else
    {
      this.agendarService.getBranchsByStateId(id)
        .then((filial: Branchs[] ) =>
        {
          console.log(filial)
          this.branch = filial
        })
        .catch((params:any) =>
        {
          console.log(params)
        })
    }
  }

  //Abre o Modal
  openModal(template: TemplateRef<any>, teste: TemplateRef<any>,reservada:boolean) {
    console.log(reservada)
    if(reservada == true){
    this.modalRef = this.modalService.show(template);
    }
    else if(reservada == false){
      this.modalRef = this.modalService.show(teste);

    }
  }

  //carrega os dados da sala selecionada
  onSelect(agendamento) {
    this.reserva = agendamento
    console.log("Aqui: " + this.reserva)
  }

  //reserva a sala
  ReservaSolicitada(form) {
    console.log(this.usuarioId)

    var envio = {
      "Description": "teste",
      "Start": form.Data+"T"+form.Start,
      "Finish": form.Data+"T"+form.Finish,
      "UserId": parseInt(this.usuarioId, 36),
      "RoomId": this.reserva.RoomId
    }
    this.agendarService.agendarSala(envio)
    console.log(envio)
    alert('reserva realizada com sucesso')
     this.modalService.hide
  }

  //paginação
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  //filtro
  filterRooms(form): void{
    var datahoraini
    var datahorafim
    console.log(form)
    //filtro pra data
    if(form.data == "" || form.data == null || form.data == empty){
      form.data = this.dateFilter
    }
    //filtro para hora de inicio
    if(form.inicio == "" || form.inicio == null || form.inicio == empty){
      datahoraini = form.data
    }else{
      datahoraini = form.data+"T"+form.inicio
    }
    //filtro para hora de fim
    if(form.fim == "" ||form.fim == null || form.fim == empty){
      datahorafim = form.data
    }else{
      datahorafim = form.data+"T"+form.fim
    }

    console.log(datahoraini + "\n" + datahorafim)
    this.agendarService.getSalasFilter(form.estado, form.filial, datahoraini,datahorafim)
    .then((salas: Agendar[])=> {
      this.agendar = salas
      for(let data of salas){
        this.agendarService.getFoto(data.RoomPicture.replace('//','\\')).then((response : string) => {
          data.RoomPicture = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
          + response)
        })
      }
    })
    .catch((params: any) => {
      console.log(params)
    })
  }


  public GetEstado(estado : string): void{
    this.estado = estado
    this.agendarService.getEstado(estado)
  }

  //public pageRooms(){
    //this.agendarService.getRoomsPage().
  //}
  //email



}
