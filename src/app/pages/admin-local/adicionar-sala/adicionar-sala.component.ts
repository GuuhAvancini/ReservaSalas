import { Branch } from './../../../models/branch.token.model';
import { Component, OnInit } from '@angular/core';
import { RoomType } from 'src/app/models/roomType.model';
import { Equipaments } from 'src/app/models/equipaments.model';
import { States } from 'src/app/models/states.model';
import { Branchs } from 'src/app/models/branch.model';
import { CadastrarSalas } from 'src/app/services/cadastro-salas.service';
import { Room } from 'src/app/models/cadastrar-salas.model';
import { Cadastrar } from 'src/app/models/cadastrar-salas.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-sala',
  templateUrl: './adicionar-sala.component.html',
  styleUrls: ['./adicionar-sala.component.scss'],
  providers: [CadastrarSalas]

})
export class AdicionarSalaComponent implements OnInit {

  imageUrl: String = 'https://img.icons8.com/metro/1600/upload.png'
  estado: States
  filial: Branch
  fileToUpload : File = null;
  idEquip: number[] = []
  idEstado: number;
  public roomType: RoomType[]
  public equipaments: Equipaments[]
  public states: States[] = []
  public branchs: Branchs[] = []
  usuario = window.localStorage.getItem('userToken');

  constructor(private cadastrarSalas: CadastrarSalas,private router: Router) {}

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

  ngOnInit() {
    if(this.usuario == "AdmTotal"){

      this.cadastrarSalas.getStates()
      .then((estado: States[]) => {
        console.log(estado)
        this.states = estado
      })
      .catch((params:any) => {
        console.log(params)
      })

    }else if(this.usuario == "AdmLocal"){
      var idState = parseInt(window.localStorage.getItem('userstateId'), 36)
      var nameState = window.localStorage.getItem('userstateName')
      var ufState = window.localStorage.getItem('userstateUf')
      var idBranch = parseInt(window.localStorage.getItem('userbranchId'))
      var nameBranch = window.localStorage.getItem('userbranchName')
      this.estado = new States(idState, nameState, ufState);

      this.filial = new Branch(idBranch, nameBranch, this.estado);
      console.log(this.filial)
      console.log(this.estado)
      this.branchs.push(this.filial)
      this.states.push(this.estado)
      console.log("Array = " + this.states)

    }


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

  onSubmit(form){

    console.log(form);

    var cadastro: Room = new Room(
      form.Name,form.BranchId,form.RoomTypeId,
      form.Capacity,this.idEquip,this.fileToUpload
    );

    console.log(JSON.stringify(cadastro))

    this.cadastrarSalas.cadastramentosalas(cadastro)
    .then((roomRetrivied: any) => {

      console.log('sala cadastrada com sucesso \n ' + roomRetrivied)
      alert('Sala cadastrado com sucesso')
      this.router.navigate(['/home']);
    })
    .catch((erro: any) => {
      console.log(erro)
    })
  }

  handleFileImput(file: FileList){
    console.log('atualizando imagem \n ' + file.item(0))
    this.fileToUpload = file.item(0);

    //show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }

    reader.readAsDataURL(this.fileToUpload);
  }
}
