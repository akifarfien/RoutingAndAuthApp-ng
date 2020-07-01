import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { Router } from '@angular/router';
import { LoginAuthService } from '../service/login-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

btnstst : Boolean = false
 
  constructor(private route: Router, private service: LoginAuthService, private cd : ChangeDetectorRef) { }
  

  ngOnInit(): void {

    // this is about share data btw two components.
    this.service.loginFlag$.subscribe(flg => {
       this.btnstst = flg;
       this.cd.markForCheck();
    })
  }

 

  logout() {

    
      this.service.setloginFlagSource(false);
      
      localStorage.removeItem("loginFlg");

     this.btnstst  = JSON.parse( localStorage.getItem("loginFlg")  || 'false');

      console.log("header logout "+ this.btnstst );
      this.cd.markForCheck();
      return this.route.navigate(['/login']);

    


  }

  search(){
    event.preventDefault();
  }

}
