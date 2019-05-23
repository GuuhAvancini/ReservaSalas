import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeAgendamentoComponent } from './components/home-agendamento/home-agendamento.component';
import { CadastrarSalasComponent } from './components/cadastrar-salas/cadastrar-salas.component';
import { FiltrosComponent } from './components/home-agendamento/filtros/filtros.component';
import { PaginationComponent } from './components/home-agendamento/pagination/pagination.component';
import { RoomsComponent } from './components/home-agendamento/rooms/rooms.component';
import { ModalComponent } from './components/home-agendamento/modal/modal.component';
import { LoginComponent } from './login/login.component';



const appRoutes:Routes = [
  {path: 'home-agendar', component: HomeAgendamentoComponent},
  {path: 'home-agendar/:id', component: HomeAgendamentoComponent},
  {path: 'cadastro-tela', component: CadastrarSalasComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'home-agendar/modal/:id', component: ModalComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeAgendamentoComponent,
    CadastrarSalasComponent,
    FiltrosComponent,
    PaginationComponent,
    RoomsComponent,
    ModalComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
