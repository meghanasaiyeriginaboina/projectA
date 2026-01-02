import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { IphoneComponent } from './navigatingcomponents/iphone/iphone.component';
import { AndroidComponent } from './navigatingcomponents/android/android.component';
import { HelpComponent } from './navigatingcomponents/help/help.component';
import { CompanyComponent } from './navigatingcomponents/company/company.component';
import { SigninComponent } from './navigatingcomponents/signin/signin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BannerComponent } from './welcome/banner/banner.component';
import { AndroidUserComponent } from './welcome/android_user/android-user.component';
import { MobileSecurityComponent } from './welcome/mobile_security/mobile-security.component';
import { SpywareComponent } from './welcome/spyware/spyware.component';
import { HelpCenterComponent } from './welcome/help_center/help-center.component';
import { SpyingComponent } from './welcome/spying/spying.component';
import { LatestInsightsComponent } from './welcome/latest_insights/latest-insights.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    FooterComponent,
    IphoneComponent,
    AndroidComponent,
    HelpComponent,
    CompanyComponent,
    SigninComponent,
    BannerComponent,
    AndroidUserComponent,
    MobileSecurityComponent,
    SpywareComponent,
    HelpCenterComponent,
    SpyingComponent,
    LatestInsightsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule          
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
