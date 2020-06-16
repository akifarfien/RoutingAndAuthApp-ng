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

btnstst: Boolean ;
  constructor(private route: Router, private service: LoginAuthService) { }

  ngOnInit(): void {
    this.service.loginFlag$.subscribe(flg => {
      this.btnstst = flg;
      console.log("header init "+ this.btnstst );
    })
  }



  logout() {

    if (this.btnstst) {
      this.service.setloginFlagSource(false);
      this.btnstst = this.service.getloginFlagSource();
      console.log("header logout "+ this.btnstst );

      return this.route.navigate(['/login']);

    }


  }

}
