import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * App Modules
 */
import { LandingModule } from './features/landing/landing-module';
import { AuthModule } from './features/auth/auth.module';

/**
 * UI Components
 */
// import { UiHeaderComponent } from './uicomponents/ui-header/ui-header.component';
// import { UiFooterComponent } from './uicomponents/ui-footer/ui-footer.component';
// import { UiCookiesComponent } from './uicomponents/ui-cookies/ui-cookies.component';
// import { UiNotifyComponent } from './uicomponents/ui-notify/ui-notify.component';
import { CoreModule } from './core/core.module';


// const uiComponents = [
//   UiHeaderComponent,
//   UiFooterComponent,
//   UiCookiesComponent,
//   UiNotifyComponent
// ]

@NgModule({
  declarations: [
    AppComponent,
    // ...uiComponents,
  ],
  imports: [
    CoreModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
