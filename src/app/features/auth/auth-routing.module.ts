import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SigninComponent } from "./containers/signin/signin.component";
import { SignupComponent } from "./containers/signup/signup.component";


const routes: Routes = [
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent}
 ];
 
 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
   providers: []
 })
 export class AuthRoutingModule {}
 