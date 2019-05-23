import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminLocalComponent } from './admin-local.component';
import { AdicionarSalaComponent } from './adicionar-sala/adicionar-sala.component';
import { AdminLocalRoutingModule } from "./admin-local.routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports:[
      CommonModule,
      AdminLocalRoutingModule,
      FormsModule,
  ],
  exports:[],
  declarations:[
    AdminLocalComponent,
    AdicionarSalaComponent
      ],
  providers:[]
})
export class LocalAdminModule {}
