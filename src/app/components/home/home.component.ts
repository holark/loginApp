import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public githubUserQuery;
  repoData: any = [];

  // gitForm1: FormControl

  constructor(
    private gitService : GithubService,
    private fb: FormBuilder
  ) {
    this.githubUserQuery = "";
  }

  ngOnInit() {
    // this.gitForm = this.fb.control()
  }

  searchUser() {
    console.log(this.githubUserQuery);
    this.gitService.getGitUserData(this.githubUserQuery).subscribe(
      (res: any) => {
        console.log(res);
        if(res.success) {
          this.repoData = res.data
        } else {
          console.log(res.msg);

        }
      }, error => {
        console.log(error);

      }
    );
  }


}
