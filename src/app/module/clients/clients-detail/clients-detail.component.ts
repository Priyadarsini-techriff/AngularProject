import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/model/clients';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.css']
})
export class ClientsDetailComponent {
  clientDetails: any | undefined;

  constructor(
    private api: UserService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.getClientDetailsById(params['id']);
    });
  }

  getClientDetailsById(id: number) {
    this.api.viewClientDetails(id).subscribe((res: Client[]) => {
      this.clientDetails = res;
    });
  }
}
