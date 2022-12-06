import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploreProject } from 'src/app/model/projects';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  projectDetails: any | undefined;

  constructor(
    private api: UserService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.getProjectDetailsById(params['id']);
    });
  }

  getProjectDetailsById(id: number) {
    this.api.viewProjectDetails(id).subscribe((res: ExploreProject[]) => {
      this.projectDetails = res;
    });
  }

}
