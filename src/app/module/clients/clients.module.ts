import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';
import { ClientProjectComponent } from './client-project/client-project.component';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientsDetailComponent,
    ClientProjectComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,HttpClientModule
  ]
})
export class ClientsModule { }
