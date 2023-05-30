import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAppDataService {


  sdata ="service data"
  
  constructor() { }

  checkData(){
    return "hello hi"
  }
}
