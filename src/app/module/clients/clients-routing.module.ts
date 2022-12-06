import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProjectComponent } from './client-project/client-project.component';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
{ path: '', component: ClientsComponent },
{ path: ':id', component: ClientsDetailComponent },
{ path: ':id/projects', component: ClientProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
