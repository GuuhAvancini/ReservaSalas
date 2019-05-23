import { Signature } from './../../models/signature.model';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Login } from 'src/app/models/login';
import { UserService } from '../../services/login.service';
import { AuthService } from './auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tolken } from 'src/app/models/tolken.model';
import { Branchs } from 'src/app/models/branch.model';
import { Branch } from 'src/app/models/branch.token.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
 providers: [ UserService ]

})
export class LoginComponent implements OnInit {

  public tolken: tolken
  public assinatura: Signature
  public filial: Branch

  isLoginError : boolean = false;
  private login: Login = new Login();
  private username: String
  private password: String

  private usuarioAutenticado: boolean = false;

  mostrarAdmLocalEmitter = new EventEmitter<boolean>();
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private authuser : AuthService,private authService: UserService, private router: Router) { }

  ngOnInit() {
  }

   OnSubmitLogin() {
    this.authService.autentica(this.login).subscribe( (response: tolken) => {
      console.log(response);      
      this.tolken = response;
      console.log("aaaa")
      //Id da Filial
      localStorage.setItem('userbranchId', this.tolken.Branch.BranchId.toString());
      //Nome da Filial
      localStorage.setItem('userbranchName', this.tolken.Branch.Name);
      //Id do Estado
      localStorage.setItem('userstateId', this.tolken.Branch.State.StateId.toString());
      //Nome do Estado
      localStorage.setItem('userstateName', this.tolken.Branch.State.Name);
      //UF do Estado 
      localStorage.setItem('userstateUf', this.tolken.Branch.State.Uf);
      //Nome do Usuário
      localStorage.setItem('userName', this.tolken.Name.toString());
      //pegar o ID
      localStorage.setItem('UserId', this.tolken.UserId.toString());

      this.assinatura = this.tolken.Signature;

      //Cookie
      localStorage.setItem('currentUser', JSON.stringify(this.tolken));
      //Assinatura do Usuario
      localStorage.setItem('userToken', this.assinatura.Name);

      console.log(localStorage)

      this.authuser.userAutenticado();
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;      
      alert('Login incorreto')
    });    
    
    // if(this.tolken != undefined){
    //   this.authuser.userAutenticado();
    // }
  }
}
