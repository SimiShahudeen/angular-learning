import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';
import { ServiceAppDataService } from '../Services/service-app-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = "Your perfect banking partner"
  uname:any
  psw:any
  placeholderData = "enter your password"

  constructor(private ds:ServiceAppDataService) { }
  ngOnInit(): void { }

  login() {
    // alert(this.uname)
    // console.log(this.uname);
    alert(`${this.ds.sdata} ${this.ds.checkData()}`)
    
  }
}
