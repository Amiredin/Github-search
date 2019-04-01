import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubsearchService {

  username: string;
  
 

  constructor(private http:HttpClient) {
    console.log(this.username )
   this.username =""
   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users" + this.username  );
  }
  updateProfile(username:string){
    this.username = username;
  }
}
