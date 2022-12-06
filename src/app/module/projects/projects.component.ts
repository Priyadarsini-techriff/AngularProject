import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExploreProject } from 'src/app/model/projects';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectList: ExploreProject[] = [];
  projectDetail!: ExploreProject;
  

  constructor(private exploreProjectService: UserService) { }

  ngOnInit() {
    this.getAllProjects();
  }
  getAllProjects() {
    this.exploreProjectService.getProjects().subscribe((res: ExploreProject[]) => {
      console.log(res);
      this.projectList =res;
    })
  }


}
