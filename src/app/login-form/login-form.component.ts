import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../service/login-auth.service';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginStatus = true;
 
  constructor(private loginauth : LoginAuthService, private route: Router) { }

  ngOnInit(): void {
  }

  validateUser(name,pass){
    
   this.loginStatus = this.loginauth.validateUser(name,pass);

   if(this.loginStatus) this.route.navigate(['/welcome']);
   else this.route.navigate(['/login']);
  
  }
 
get loginStatusVal(){
  return this.loginStatus;
}

  
}
