import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerComponent } from '../shared/components/video-player/video-player.component';
import { BooksListComponent } from './books-list/books-list.component';
import { ChaptersListComponent } from './chapters-list/chapters-list.component';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  },
  {
    path: ':bookId',
    component: ChaptersListComponent
  },
  {
    path: 'showexercises/:chapterId',
    component: ExercisesListComponent
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
