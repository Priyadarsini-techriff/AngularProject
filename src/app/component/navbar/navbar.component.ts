import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private downloadfileservice: UserService) { }
  downloadFile() {

    this.downloadfileservice.downloadFile().subscribe((response:any) => {
      let fileName=response.headers.get('content-disposition')
      ?.split(';')[1].split('=')[1];

      let blob:Blob=response.body as Blob;
      let url=window.URL.createObjectURL(blob);
      let a=document.createElement('a');
      a.download=fileName!;
      a.href=url;
      a.click();


    })


  }
}
