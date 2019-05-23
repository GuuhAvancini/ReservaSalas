import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private usuarioAutenticado: boolean = false;
   
    mostrarMenuEmitter = new EventEmitter<boolean>();

    constructor(private router: Router,) { }

    userAutenticado(){    
        
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/home']);
    }
    getUsuarioAutenticado() {
        return this.usuarioAutenticado;
    }
}
