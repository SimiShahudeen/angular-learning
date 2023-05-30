import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname: any
  data = "Your perfect banking partner"
  constructor() { }
  ngOnInit(): void { }
  placeholderData = "enter your password"

  login() {
    alert("login clicked")
  }
  unameChange(event: any) {
    // console.log(event.target.value);
    const uname = event.target.value

  }
}
