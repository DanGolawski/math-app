import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamMenuComponent } from './exam-menu/exam-menu.component';
import { ExercisesComponent } from './exercises/exercises.component';

const routes: Routes = [
  {
    path: '',
    component: ExamMenuComponent
  },
  {
    path: 'exercises',
    component: ExercisesComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LeavingExamRoutingModule { }
