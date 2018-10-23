import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../shared/pipes';
import { SeoService } from './services/seo.service';
import { StackApiService } from './api/stack.api';
import { ItemApiService } from './api/item.api';
import { UserApiService } from './api/user.api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const API = [
  StackApiService,
  ItemApiService,
  UserApiService
]

const SERVICE = [
  SeoService
]

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule, 
    RouterModule, 
    PipesModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  exports: [
    PipesModule
  ],
  providers: [
    ...SERVICE,
    ...API
  ]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}
