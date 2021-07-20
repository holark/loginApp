import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser | undefined;
  loggedIn: boolean | undefined;

  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService,
    private socialAuthService:SocialAuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user1) => {
      this.user = user1;
      this.loggedIn = (user1 != null)

      console.log(this.user);

      if(user1) {
        this.router.navigate(['/dashboard'], {state: {data: user1}})
      }

    });
  }

  onSubmit() {
    console.log("form is submitted")
    if ((this.credentials.username != '' && this.credentials.password != '') &&
    (this.credentials.username != null && this.credentials.password != null))
    {
      console.log("WE have to Submit the form to server")
      // token generate
        this.loginService.login(this.credentials)
            .subscribe(
              (response: any) => {
                // success
                console.log(response);
                localStorage.setItem('token', response.token)
              }, error => {
                // error
                console.log(error);
              }
            )

    } else {
      console.log("Fields are empty !!")
    }
  }

  //  onSignIn(googleUser:any) {

  //   console.log(googleUser);


  //   const profile = googleUser.getBasicProfile();
  //   console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  //   console.log('Full Name: ' + profile.getName());
  //   console.log('Given Name: ' + profile.getGivenName());
  //   console.log('Family Name: ' + profile.getFamilyName());
  //   console.log("Image URL: " + profile.getImageUrl());
  //   console.log("Email: " + profile.getEmail());

  //   // The ID token you need to pass to your backend:
  //   var id_token = googleUser.getAuthResponse().id_token;
  //   console.log("ID Token: " + id_token);
  // }

  // signOut() {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }

  // onGoogleSignIn() {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //     .then(
  //       (res)=> {
  //         console.log(res);

  //       }
  //     )
  // }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  // signOut(): void {
  //   this.socialAuthService.signOut();
  // }


}
