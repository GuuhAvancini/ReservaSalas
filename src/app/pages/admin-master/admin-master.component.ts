import { Component, OnInit } from '@angular/core';
import { UserAdd, userAll } from 'src/app/models/user.add.module';
import { UserAddService } from 'src/app/services/master-user.service';

@Component({
  selector: 'app-admin-master',
  templateUrl: './admin-master.component.html',
  styleUrls: ['./admin-master.component.scss'],
  providers: [UserAddService]
})
export class AdminMasterComponent implements OnInit {

  constructor(private adicionarUsuario : UserAddService) { }

  public userInformation : userAll[]

  public id : number;
  ngOnInit() {
    this.adicionarUsuario.getAllUser()
      .then((getUsers: userAll[]) => {

        this.userInformation = getUsers
        console.log(this.userInformation)

      })
      .catch((params: any) => {
        console.log(params)
      })
  }
    getUsersAll(){

    }
}
