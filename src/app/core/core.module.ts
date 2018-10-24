import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../shared/pipes';
import { SeoService } from './services/seo.service';
import { StackApiService } from './api/stack.api';
import { ItemApiService } from './api/item.api';
import { UserApiService } from './api/user.api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiHeaderComponent } from '../uicomponents/ui-header/ui-header.component';
import { UiFooterComponent } from '../uicomponents/ui-footer/ui-footer.component';
import { UiCookiesComponent } from '../uicomponents/ui-cookies/ui-cookies.component';
import { UiNotifyComponent } from '../uicomponents/ui-notify/ui-notify.component';
import { MatToolbarModule } from '@angular/material'

const API = [
  StackApiService,
  ItemApiService,
  UserApiService
]

const SERVICE = [
  SeoService
]

const UICOMPONENTS = [
  UiHeaderComponent,
  UiFooterComponent,
  UiNotifyComponent,
  UiCookiesComponent
]

/**
 * Create material Module
 */

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule, 
    RouterModule, 
    PipesModule,
    MatToolbarModule,
  ],
  declarations: [
    ...UICOMPONENTS
  ],
  exports: [
    PipesModule,
    ...UICOMPONENTS
  ],
  providers: [
    ...API,
    ...SERVICE,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}
