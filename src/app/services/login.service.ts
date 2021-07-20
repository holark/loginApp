import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000"

  constructor(private _http: HttpClient) { }

  // calling the server to generate token
  generateToken(token: any) {
    // token generate
    return this._http.post(`${this.url}/token`, token)
  }

  placeholder(data: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this._http.post(this.url + '/login', data)
  }

  // for user login
  loginUser(token: any) {
    localStorage.setItem("token", token)
    return true;
  }

  login(data: any) {
    console.log(data);
    return this._http.post(this.url + '/login', data)
  }

  // to check use is logged in or not
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  // for logout the user
  logout() {
    localStorage.removeItem('token')
    return true;
  }

  // for getting the token
  getToken() {
    return localStorage.getItem("token")
  }
}
