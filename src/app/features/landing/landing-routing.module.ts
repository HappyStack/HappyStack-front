import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./containers/home/home.component";
import { AboutComponent } from "./containers/about/about.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent}
 ];
 
 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
   providers: []
 })
 export class HomeRoutingModule {}
 