import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLocalComponent } from './admin-local.component';
import { AuthGuards } from "../../guards/auth.guards";
import { AdicionarSalaComponent } from './adicionar-sala/adicionar-sala.component';

const AdminLocalRoutes = [
    { path:'admin-local', component: AdminLocalComponent, canActivate: [AuthGuards], },
    { path:'admin-loca/sala', component: AdicionarSalaComponent, canActivate: [AuthGuards],}
]

@NgModule({
    imports: [RouterModule.forChild(AdminLocalRoutes)],
    exports: [RouterModule]
})
export class AdminLocalRoutingModule {}
