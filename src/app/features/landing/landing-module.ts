import { NgModule } from '@angular/core';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './landing-routing.module';

@NgModule({
    imports: [
        HomeRoutingModule,
    ],
    exports: [],
    declarations: [
        HomeComponent
    ],
    providers: [],
  })
  export class LandingModule {}
  