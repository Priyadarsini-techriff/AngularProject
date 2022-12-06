import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Client } from '../model/clients';
import { Observable } from 'rxjs';
import { ExploreProject } from '../model/projects';
import { TimeSheets } from '../model/timesheets';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  clientapi: string = "http://localhost:3000/clients/";
  projectapi: string = "http://localhost:3000/projects/";
  timesheetapi:string="http://localhost:3000/timesheets/";
  fileapi: string = "https://timekper.azureedge.net/timekper/project/d6b53b0d-ab50-42f2-b5f4-33d06ad4de02_Naukri_Durgaprasad[3y_8m].pdf"

  constructor(private http: HttpClient) { }

  getClientList() {
    return this.http.get<Client[]>(this.clientapi);

  }
  viewClientDetails(id: number): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientapi + id);
  }
  getProjects(): Observable<ExploreProject[]> {
    return this.http.get<ExploreProject[]>(this.projectapi);
  }
  viewProjectDetails(id: number): Observable<ExploreProject[]> {
    return this.http.get<ExploreProject[]>(this.projectapi + id);
  }
 
  getTimesheets():Observable<TimeSheets[]>{
    return this.http.get<TimeSheets[]>(this.timesheetapi);
  }
  viewTimesheetDetails(id: number): Observable<TimeSheets[]> {
    return this.http.get<TimeSheets[]>(this.timesheetapi + id);
  }
  downloadFile() {
     return this.http.get(this.fileapi,{observe:'response',responseType:'blob'})
  }
}
