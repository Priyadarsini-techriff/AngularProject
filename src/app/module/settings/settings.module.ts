import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    SettingsComponent,
    MyProfileComponent,
    TwoFactorAuthenticationComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    HttpClientModule,
    NgOtpInputModule
  ]
})
export class SettingsModule { }
