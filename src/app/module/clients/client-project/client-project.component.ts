import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/model/clients';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-client-project',
  templateUrl: './client-project.component.html',
  styleUrls: ['./client-project.component.css']
})
export class ClientProjectComponent {
  projectDetails: any | undefined;

  constructor(
    private api: UserService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.clientProjectDetailsById(params['id']);
    });
  }

  clientProjectDetailsById(id: number) {
    this.api.viewClientDetails(id).subscribe((res: Client[]) => {
      this.projectDetails = res;
    });
  }
}
