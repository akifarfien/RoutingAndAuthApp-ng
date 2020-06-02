import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { Router } from '@angular/router';
import { LoginAuthService } from '../service/login-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private service : LoginAuthService) { }

  ngOnInit(): void {
  }
  logout() {
    
    if(LoginAuthService.loginFlag){
      console.log("logout se phele "+ LoginAuthService.loginFlag);
      LoginAuthService.loginFlag = false;
      console.log("logout"+ LoginAuthService.loginFlag);
      return this.route.navigate(['/login']);

    }
  

  }

}
