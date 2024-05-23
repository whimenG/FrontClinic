import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'login-menu',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './loginMenu.component.html',
  styleUrls: ['./loginMenu.component.css']

})
export class LoginMenuComponent implements OnInit {
  signupUser: any[] = [];
  signupObj:any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj:any = {
    userName:'',
    password:''
  };

  constructor() {
  }
  ngOnInit(): void {
    const localData= localStorage.getItem('signUpUser');
    if(localData != null){
    this.signupUser = JSON.parse(localData);
    }
  }
  onSignup() {
  this.signupUser.push(this.signupObj)
    localStorage.setItem('signUpUser',JSON.stringify(this.signupUser));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }
  onLogin() {
    debugger
  const isUserExist = this.signupUser.find(m => m.username === this.signupObj.userName && m.userPassword === this.signupObj.userPassword);
  if(isUserExist != undefined){
    alert('User Login Successfully');
  } else {
    alert('Wrong credentials.');
  }
  }
}
