import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    
    AuthRoutingModule,
    CommonModule
    
  ],
  exports:[
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }
