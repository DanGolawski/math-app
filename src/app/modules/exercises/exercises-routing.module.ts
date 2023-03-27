import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerComponent } from '../shared/components/video-player/video-player.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ExerciseViewerComponent } from './exercise-viewer/exercise-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: ContentListComponent
  },
  {
    path: 'showexercises',
    component: ExerciseViewerComponent
  },
  {
    path: 'exercise-video',
    component: VideoPlayerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
