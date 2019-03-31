import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GithubsearchService} from './githubsearch.service';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { FormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubsearchComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
