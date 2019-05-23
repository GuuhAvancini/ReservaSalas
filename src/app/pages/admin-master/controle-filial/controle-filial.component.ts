import { Component, OnInit } from '@angular/core';
import { UserAddService } from 'src/app/services/master-user.service';
import { Branchs } from 'src/app/models/branch.model';
import { AgendarService } from 'src/app/services/agendar.service';
import { States } from 'src/app/models/states.model';
import { CadastrarSalas } from 'src/app/services/cadastro-salas.service';

@Component({
  selector: 'app-controle-filial',
  templateUrl: './controle-filial.component.html',
  styleUrls: ['./controle-filial.component.scss'],
  providers: [UserAddService, AgendarService, CadastrarSalas]
})
export class ControleFilialComponent implements OnInit {

  constructor(private controleFilial : UserAddService, private service: AgendarService, private busca: CadastrarSalas) { }

  public estados: States[]
  public filiaisAll : Branchs[]

  ngOnInit() {
    this.controleFilial.getAllFiliais()
    .then((getFilial: Branchs[]) =>{
      this.filiaisAll = getFilial;
      console.log(this.filiaisAll)
    })

    this.service.getStates()
    .then((response: States[]) =>{
        this.estados = response;
        console.log(this.estados)
    })
  }

  filialFilter(form){
    console.log(form.estado)
    this.busca.getBranchsByStateId(form.estado)
    .then((response: Branchs[]) =>{
      this.filiaisAll = response;
    })

  }
}
