import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'welcome', component: WelcomeComponent}
     
      ])
  ],
  
  exports: [RouterModule]

})
export class UserModule { }
