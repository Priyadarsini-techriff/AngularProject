import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeSheetsRoutingModule } from './time-sheets-routing.module';
import { TimeSheetsComponent } from './time-sheets.component';
import { TimesheetDetailsComponent } from './timesheet-details/timesheet-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TimeSheetsComponent,
    TimesheetDetailsComponent
  ],
  imports: [
    CommonModule,
    TimeSheetsRoutingModule,
    HttpClientModule
  ]
})
export class TimeSheetsModule { }
