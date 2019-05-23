import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { CookieService } from 'ngx-cookie-service';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './components/login/auth.service';
import { AuthGuards } from './guards/auth.guards';
import { HomeComponent } from './pages/home/home.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { AdminLocalComponent } from './pages/admin-local/admin-local.component';
import { AdicionarSalaComponent } from './pages/admin-local/adicionar-sala/adicionar-sala.component';
import { AdminLocalRoutingModule } from "./pages/admin-local/admin-local.routing.module";
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminMasterComponent } from './pages/admin-master/admin-master.component';
import { UserProfileComponent } from './pages/admin-master/user-profile/user-profile.component';
import { ControlRoomsComponent } from './pages/admin-local/control-rooms/control-rooms.component';
import { AdicionarUserComponent } from './pages/admin-master/adicionar-user/adicionar-user.component';
import { ControleFilialComponent } from './pages/admin-master/controle-filial/controle-filial.component';
import { PaginationComponent } from './pages/home/pagination/pagination.component';
import { EditRoomComponent } from './pages/admin-local/edit-room/edit-room.component';
import { ReservasAtuaisComponent } from './pages/admin-local/reservas-atuais/reservas-atuais.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginComponent,
    HomeComponent,
    ReservasComponent,
    AdminLocalComponent,
    AdicionarSalaComponent,
    AdminMasterComponent,
    UserProfileComponent,
    ControlRoomsComponent,
    AdicionarUserComponent,
    ControleFilialComponent,
    PaginationComponent,
    EditRoomComponent,
    ReservasAtuaisComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    AdminLocalRoutingModule,
    HttpModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgbPaginationModule,
    NgbAlertModule,
    PaginationModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [AuthService, AuthGuards,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
