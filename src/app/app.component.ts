import { Component } from '@angular/core';
import { AuthService } from './components/login/auth.service';
import { Login } from './models/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'stefanini-room';
  mostrarMenu: boolean = false;




  constructor(private authService: AuthService) {}

  ngOnInit(){

    var usuario = window.localStorage.getItem('currentUser')
    console.log('esse', usuario)

    this.authService.mostrarMenuEmitter.subscribe(
        mostrar => this.mostrarMenu = mostrar
    );
  }

}
