import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeSheetsComponent } from './time-sheets.component';
import { TimesheetDetailsComponent } from './timesheet-details/timesheet-details.component';

const routes: Routes = [
  { path: '', component: TimeSheetsComponent },
  { path: ':id', component: TimesheetDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeSheetsRoutingModule { }
