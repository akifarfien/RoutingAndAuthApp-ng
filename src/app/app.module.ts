import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path : 'login', component: LoginFormComponent  },
      {path:'', redirectTo:'login', pathMatch:'full'}
      ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
