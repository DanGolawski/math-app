import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerComponent } from '../shared/components/video-player/video-player.component';
import { BooksComponent } from './books/books.component';
import { SelfImprovementMenuComponent } from './self-improvement-menu/self-improvement-menu.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
    path: '',
    component: SelfImprovementMenuComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'videos/player',
    component: VideoPlayerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SelfImprovementRoutingModule { }
