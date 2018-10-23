import { NgModule } from '@angular/core';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';

import { HomeRoutingModule } from './landing-routing.module';

@NgModule({
    imports: [
        HomeRoutingModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
        AboutComponent
    ],
    providers: [],
  })
  export class LandingModule {}
  