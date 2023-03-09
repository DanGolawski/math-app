import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IosOnboardingComponent } from './ios-onboarding/ios-onboarding.component';
import { IonicModule } from '@ionic/angular';
import { OnboardingRoutingModule } from './onboarding-routing.module';

@NgModule({
  declarations: [IosOnboardingComponent],
  imports: [
    CommonModule,
    IonicModule,
    OnboardingRoutingModule
  ],
})
export class OnboardingModule { }
