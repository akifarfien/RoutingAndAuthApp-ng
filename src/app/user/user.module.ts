import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [WelcomeComponent, DetailComponent, AboutComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'detail/:id', component: DetailComponent},
      {path: 'about', component:AboutComponent}
     
      ])
  ],
  
  exports: [RouterModule]

})
export class UserModule { }
