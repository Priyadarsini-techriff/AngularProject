import { Component } from '@angular/core';
import { TimeSheets } from 'src/app/model/timesheets';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-time-sheets',
  templateUrl: './time-sheets.component.html',
  styleUrls: ['./time-sheets.component.css']
})
export class TimeSheetsComponent {
  timesheetList: TimeSheets[]=[];
  

  constructor(private exploreProjectService: UserService) { }

  ngOnInit() {
    this.getAllTimesheets();
  }
  getAllTimesheets() {
    this.exploreProjectService.getTimesheets().subscribe((res: TimeSheets[]) => {
      console.log(res);
      this.timesheetList =res;
    })
  }
}
