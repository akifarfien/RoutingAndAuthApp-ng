import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  stage: Boolean;

  private _loginFlagSource = new Subject<Boolean>();
  loginFlag$ = this._loginFlagSource.asObservable();

  userName = 'master@akifarfien';
  passwrd = '12345';

  constructor() { }

  setloginFlagSource(mssg: Boolean) {
    this._loginFlagSource.next(mssg);
  }

  getloginFlagSource() : Boolean {
    
    this.loginFlag$.subscribe(flag =>{
     
     this.stage  = flag.valueOf();
    })
 return this.stage;
  }

  validateUser(name, password) {
    if (this.userName === name && this.passwrd === password) {
      this.setloginFlagSource(true);
      // LoginAuthService.loginFlag = true;
      return true;
    }
    else return false;
  }

}
