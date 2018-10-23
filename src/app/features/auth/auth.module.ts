import { NgModule } from '@angular/core';
import { SigninComponent } from './containers/signin/signin.component';
import { SignupComponent } from './containers/signup/signup.component';
import { PwdForgottenComponent } from './containers/pwd-forgotten/pwd-forgotten.component';
import { PwdResetComponent } from './containers/pwd-reset/pwd-reset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
    imports: [
        ReactiveFormsModule,
        AuthRoutingModule
    ],
    exports: [],
    declarations: [
        SigninComponent,    
        SignupComponent,
        PwdForgottenComponent,
        PwdResetComponent
    ],
    providers: [],
  })
  export class AuthModule { }
  