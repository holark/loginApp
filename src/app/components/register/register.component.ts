import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
  }

  register() {
    let data: any = {
      username: 'hs@gmail.com',
      password: '123'
    }

    console.log(data);

    this.registerService.register(data).subscribe(
      (res: any) => {
        console.log(res);

      }, error => {
        console.log(error);

      }
    )

  }

}
