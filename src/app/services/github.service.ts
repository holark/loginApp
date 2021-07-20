import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CLIENT_ID, CLIENT_SECRET} from '../credentials/githubCred'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpclient: HttpClient) {

  }

  // public getProfile(searchQuery) {
  //   let dataURL = `https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
  //   return this.httpclient.get(dataURL).pipe(
  //     retry (count: 1),
  //   );
  // }

  getGitUserData(name: String) {
    return this.httpclient.get('http://localhost:3000/thirdPartyData/' + name)
  }
}
