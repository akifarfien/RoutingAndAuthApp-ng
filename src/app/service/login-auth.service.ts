import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
userName = 'master@akifarfien';
passwrd = '12345';
  constructor() { }

validateUser(name, password){
if(this.userName === name && this.passwrd === password) return true;
else return false;
}

}
