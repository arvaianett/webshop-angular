import { Component, OnInit } from '@angular/core';
import { LoginData } from '../../models/loginData';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginData: LoginData;

  constructor(private router: Router) {
    this.loginData = {username: '', password: ''};
  }

  ngOnInit() {
  }

  public loginEventHandler(): void {
    this.router.navigate(['search']);
  }
}
