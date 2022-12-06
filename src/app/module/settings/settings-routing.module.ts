import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingsComponent } from './settings.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';

const routes: Routes = [
  { path: '', redirectTo: 'settings', pathMatch: 'full' },
  { path: '', component: SettingsComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: '2fa', component: TwoFactorAuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
