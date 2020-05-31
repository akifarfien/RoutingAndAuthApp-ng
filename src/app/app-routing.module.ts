import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  imports: [RouterModule.forRoot([
    { path : 'login', component: LoginFormComponent  },
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path: '**', component: PageNotFoundComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 