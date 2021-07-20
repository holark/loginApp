import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:3000'

  constructor(
    private _http: HttpClient
  ) { }

  register(data: any){
    return this._http.post(this.url + '/register', data)
  }

}
