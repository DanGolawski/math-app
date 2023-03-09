import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IosOnboardingComponent } from './ios-onboarding/ios-onboarding.component';

const routes: Routes = [
  {
    path: '',
    component: IosOnboardingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
