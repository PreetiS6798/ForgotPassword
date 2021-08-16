import { Component, OnInit } from '@angular/core';
import { Forgot } from '../Forgot';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})

export class ForgotpasswordComponent implements OnInit {

 forgot:Forgot = new Forgot();
  constructor() {
     this.forgot.userEmail="";
  }
  ngOnInit(): void {
  }


}