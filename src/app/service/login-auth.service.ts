import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  static loginFlag = false;

userName = 'master@akifarfien';
passwrd = '12345';
  constructor() { }

validateUser(name, password){
if(this.userName === name && this.passwrd === password) {
  LoginAuthService.loginFlag = true;
  return true;
}
else return false;
}

}
