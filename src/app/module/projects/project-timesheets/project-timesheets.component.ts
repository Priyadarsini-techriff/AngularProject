import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/model/clients';
import { ExploreProject } from 'src/app/model/projects';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-project-timesheets',
  templateUrl: './project-timesheets.component.html',
  styleUrls: ['./project-timesheets.component.css']
})
export class ProjectTimesheetsComponent {
  timesheetDetails: any | undefined;

  constructor(
    private api: UserService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.projectTimesheetDetailsById(params['id']);
    });
  }

  projectTimesheetDetailsById(id: number) {
    this.api.viewProjectDetails(id).subscribe((res: ExploreProject[]) => {
      this.timesheetDetails = res;
    });
  }
}
