import { Signature } from './../../../models/signature.model';
import { Component, OnInit } from '@angular/core';
import { UserAdd } from 'src/app/models/user.add.module';
import { Branchs } from 'src/app/models/branch.model';
import { CadastrarSalas } from 'src/app/services/cadastro-salas.service';
import { States } from 'src/app/models/states.model';
import { RoomType } from 'src/app/models/roomType.model';
import { Equipaments } from 'src/app/models/equipaments.model';
import { UserAddService } from '../../../services/master-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-user',
  templateUrl: './adicionar-user.component.html',
  styleUrls: ['./adicionar-user.component.scss'],
  providers: [CadastrarSalas,UserAddService]

})
export class AdicionarUserComponent implements OnInit {

  public useradd : UserAdd
  idEstado: number;
  public branchs: Branchs[]
  idEquip: number[] = []
  public states: States[]
  public roomType: RoomType[]
  public equipaments: Equipaments[]
  public assinaturas: Signature[]

  constructor(private cadastrarSalas: CadastrarSalas,private adicionarUsuario : UserAddService,private router: Router) { }

  ngOnInit() {
    this.cadastrarSalas.getStates()
    .then((estado: States[]) => {
      console.log(estado)
      this.states = estado
    })
    .catch((params:any) => {
      console.log(params)
    })
    this.cadastrarSalas.getRoomType()
    .then((roomtype: RoomType[]) => {
      console.log(roomtype)
      this.roomType = roomtype
    })

    this.cadastrarSalas.getEquipaments()
    .then((equipaments: Equipaments[]) => {
      console.log(equipaments)
      this.equipaments = equipaments
    })

    this.adicionarUsuario.getAllSignatures()
    .then((resp: Signature[]) =>{
      this.assinaturas = resp
      console.log(this.assinaturas)
    })

  }

  onSelect(id: number)
  {
    if(id == 0){ }
    else
    {
      this.idEstado = id;
      console.log(this.idEstado)
      this.cadastrarSalas.getBranchsByStateId(id)
        .then((filial: Branchs[] ) =>
        {
          console.log(filial)
          this.branchs = filial
        })
        .catch((params:any) =>
        {
          console.log(params)
        })
    }
  }

  selectedStudents(qualquercoisa){
    let c: number = 0
    let remove : boolean = false
    for (let index = 0; index < this.idEquip.length; index++) {
      if (qualquercoisa == this.idEquip[index]) {
        console.log("remove: " + qualquercoisa)
        this.idEquip.splice(index, 1)
        remove = true;
        break;
      }else{
        c = c + 1
      }
    }

    if(c == this.idEquip.length && remove == false){
      this.idEquip.push(qualquercoisa)
    }
    console.log(this.idEquip)
}

  onSubmitUser(useradd){

    console.log("dados do usuario" + useradd);

    this.adicionarUsuario.adicionarUsuario(useradd);
    alert("usuario adicionado com sucesso")
    this.router.navigate(['/home']);

  }
}
