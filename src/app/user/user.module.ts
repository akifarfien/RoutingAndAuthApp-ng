import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [WelcomeComponent, DetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'detail/:id', component: DetailComponent}
     
      ])
  ],
  
  exports: [RouterModule]

})
export class UserModule { }
