import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Client } from 'src/app/model/clients';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clientList: Client[] = [];

  constructor(private api: UserService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllClient();
  }

  getAllClient() {
    this.api.getClientList().subscribe((res: Client[]) => {
      console.log(res);
      this.clientList = res;

    })
  }

}

