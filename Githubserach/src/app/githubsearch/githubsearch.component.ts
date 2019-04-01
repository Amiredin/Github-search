import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubsearchService} from '../githubsearch.service'
import {Repository} from '../repository';
import {User} from '../user'


@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.scss']
})
export class GithubsearchComponent implements OnInit {

    profile:any;
    username: string;
    repos:any;
  constructor(private GithubsearchService: GithubsearchService) {
   }
   findProfile(){
    // this.GithubsearchService.updateProfile(this.username);
    this.GithubsearchService.getProfileInfo(this.username).subscribe(github => {
      this.profile = github;
      });

    

  } 

  ngOnInit() {
  }

}
