import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProfileService {
  private username: string;
  private clientid = '53fcbadab3c7d52c3529';
  private clientsecret = 'c44ccdbead5257ea71d9a36c1b2384e5af27e710';
  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = 'Emmasharon';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }
  updateProfile(username:string){
    this.username = username;
  }
}
