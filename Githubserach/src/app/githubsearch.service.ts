import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubsearchService {

  username: string;
  private clientid:'7deccb14cce788a4d359';
  private clientsecret:'0d208ade06b078a5243536d1acca61cb606272b7';
 

  constructor(private http:HttpClient) {
    console.log(this.username )
   this.username ="Amiredin"
   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/Amiredin" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret );
  }
  updateProfile(username:string){
    this.username = username;
  }
}
