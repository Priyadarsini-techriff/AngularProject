import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'timesheets', loadChildren: () => import('./module/time-sheets/time-sheets.module').then(m => m.TimeSheetsModule) },
  { path: 'projects', loadChildren: () => import('./module/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'clients', loadChildren: () => import('./module/clients/clients.module').then(m => m.ClientsModule) },
  { path: 'settings', loadChildren: () => import('./module/settings/settings.module').then(m => m.SettingsModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
