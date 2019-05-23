import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuards } from "./guards/auth.guards";

import { LoginComponent } from "./components/login/login.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { HomeComponent } from "./pages/home/home.component";
import { ReservasComponent } from './pages/reservas/reservas.component';
import { AdminLocalComponent } from "./pages/admin-local/admin-local.component";
import { AdicionarSalaComponent } from './pages/admin-local/adicionar-sala/adicionar-sala.component';
import { AdminMasterComponent } from './pages/admin-master/admin-master.component';
import { UserProfileComponent } from './pages/admin-master/user-profile/user-profile.component';
import { ControlRoomsComponent } from './pages/admin-local/control-rooms/control-rooms.component';
import { AdicionarUserComponent } from './pages/admin-master/adicionar-user/adicionar-user.component';
import { ControleFilialComponent } from './pages/admin-master/controle-filial/controle-filial.component';
import { EditRoomComponent } from './pages/admin-local/edit-room/edit-room.component';
import { ReservasAtuaisComponent } from './pages/admin-local/reservas-atuais/reservas-atuais.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuards]
  },
  {
    path: "reservas",
    component: ReservasComponent,
    canActivate: [AuthGuards]
  },
  {
    path: "adminLocal",
    component: AdminLocalComponent,
    canActivate: [AuthGuards]
  },
  {
    path: "AdminMaster",
    component: AdminMasterComponent,
    canActivate: [AuthGuards]
  },

  // provisorio rota de user #Gustavo arumar dps pra ser chield da controle de salas
  {
    path: "AdminMaster/user-profile/:id",
    component: UserProfileComponent,
    canActivate: [AuthGuards]
  },
  {
    path: "AdminMaster/user-profile",
    component: UserProfileComponent,
    canActivate: [AuthGuards]
  },
  {
    path: "controlrooms",
    component: ControlRoomsComponent,
    canActivate: [AuthGuards]
  },
  {
    path: "AdicionarUserComponent",
    component: AdicionarUserComponent,
    canActivate: [AuthGuards]
  },
  {
    path: "ControleFilialComponent",
    component: ControleFilialComponent,
    canActivate: [AuthGuards]
  },
  {
    path: "controlrooms/editRoom",
    component: EditRoomComponent,
    canActivate: [AuthGuards]
  },
  {
    path: "controlrooms/editRoom/:id",
    component: EditRoomComponent,
    canActivate: [AuthGuards]
  },
  {
    path: "reservasatuais",
    component: ReservasAtuaisComponent,
    canActivate: [AuthGuards]
  }


];

