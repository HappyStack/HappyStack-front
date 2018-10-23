import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../shared/pipes';
import { SeoService } from './services/seo.service';

@NgModule({
  imports: [
      CommonModule, 
      RouterModule, 
      PipesModule
    ],
  declarations: [],
  exports: [
    PipesModule
  ],
  providers: [
    SeoService,
  ]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}