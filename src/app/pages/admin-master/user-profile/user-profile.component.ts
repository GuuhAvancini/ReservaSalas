import { Component, OnInit } from '@angular/core';
import { UserAddService } from 'src/app/services/master-user.service';
import { userAll } from 'src/app/models/user.add.module';
import { tolken } from 'src/app/models/tolken.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [UserAddService]

})
export class UserProfileComponent implements OnInit {

  constructor(private adicionarUsuario : UserAddService, private route: ActivatedRoute,private router: Router) { }

  public userDell : userAll[]
  public tolken: tolken



  ngOnInit() {
    console.log("Id do user " + this.route.snapshot.params['id'])
    this.adicionarUsuario.getAllUserById(this.route.snapshot.params['id'])
      .then((getUsers: userAll[]) => {
        this.userDell = getUsers
        console.log(this.userDell)



      })
      .catch((params: any) => {
        console.log(params)
      })
  }

  
  delUser(){
    if(confirm("Tem certeza que deseja deletrar o usuario?")){
    this.adicionarUsuario.deleteUserById(this.route.snapshot.params['id'])
    alert('Usuario deletado com sucesso!')
    this.router.navigate(['/home']);
    }
  }

}
