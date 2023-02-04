import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ExerciseViewerComponent } from './exercise-viewer/exercise-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: ContentListComponent
  },
  {
    path: 'showexercises/:bookid/:chapter/:subchapter',
    component: ExerciseViewerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
