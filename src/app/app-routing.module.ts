import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { HomePage } from './home/home.page';
import { PlaylistComponent } from './playlist/playlist.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'channel',
    component: ChannelComponent
  },
  {
    path: 'playlist',
    component: PlaylistComponent
  },
  {
    path: 'player',
    component: VideoPlayerComponent
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
