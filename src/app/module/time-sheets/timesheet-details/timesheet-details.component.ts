import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeSheets } from 'src/app/model/timesheets';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-timesheet-details',
  templateUrl: './timesheet-details.component.html',
  styleUrls: ['./timesheet-details.component.css']
})
export class TimesheetDetailsComponent {
  timesheetDetails: any | undefined;

  constructor(
    private api: UserService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.getTimesheetDetailsById(params['id']);
    });
  }

  getTimesheetDetailsById(id: number) {
    this.api.viewTimesheetDetails(id).subscribe((res: TimeSheets[]) => {
      this.timesheetDetails = res;
    });
  }

}
