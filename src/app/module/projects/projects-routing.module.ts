import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectTimesheetsComponent } from './project-timesheets/project-timesheets.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [

  { path: '',component: ProjectsComponent },
  { path: ':id', component: ProjectDetailsComponent },
  { path: ':id/timesheets', component: ProjectTimesheetsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
