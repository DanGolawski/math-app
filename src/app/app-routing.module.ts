import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './modules/courses/channel/channel.component';
import { HomePage } from './home/home.page';
import { PlaylistComponent } from './modules/courses/playlist/playlist.component';
import { VideoPlayerComponent } from './modules/courses/video-player/video-player.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
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
