import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectTimesheetsComponent } from './project-timesheets/project-timesheets.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectTimesheetsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,HttpClientModule
  ]
})
export class ProjectsModule { }
