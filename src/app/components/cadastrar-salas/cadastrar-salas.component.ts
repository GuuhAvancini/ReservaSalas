import { Component, OnInit, ViewChild } from '@angular/core';
import { CadastrarSalas } from '../../api/cadastrar-salas.service'
import { Cadastrar } from "../../shared/cadastrar-salas.model"
import { NgForm, FormGroup } from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cadastrar-salas',
  templateUrl: './cadastrar-salas.component.html',
  styleUrls: ['./cadastrar-salas.component.css'],
  providers: [ CadastrarSalas ]
})
export class CadastrarSalasComponent implements OnInit {

  @ViewChild('formulario') public formulariocadastrar: NgForm

  closeResult: string;
  constructor(private cadastrarSalas: CadastrarSalas,private modalService: NgbModal ) { }

   // inicio modal
   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  // fim modal
  ngOnInit() {
  }

  public confirmarCadastramento(): void {
    console.log('teste')
    let cadastrar: Cadastrar = new Cadastrar(
    this.formulariocadastrar.value.nome,
    this.formulariocadastrar.value.categoria,
    this.formulariocadastrar.value.localidade,
    this.formulariocadastrar.value.filial,
    this.formulariocadastrar.value.capacidade,
    this.formulariocadastrar.value.equipamentos,

)

  console.log(this.formulariocadastrar)
  console.log('formulario')

  this.cadastrarSalas.cadastramentosalas(cadastrar)
  .subscribe((nome: string) => {
    console.log('deu certo' + nome)
  })
}
}
