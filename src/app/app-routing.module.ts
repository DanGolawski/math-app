import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'self-improvement',
    loadChildren: () => import('./modules/self-improvement/self-improvement.module').then(m => m.SelfImprovementModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('./modules/exercises/exercises.module').then(m => m.ExercisesModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./modules/onboarding/onboarding.module').then(m => m.OnboardingModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
