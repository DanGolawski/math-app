import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { VideoPlayerComponent } from '../shared/components/video-player/video-player.component';

const routes: Routes = [
  {
    path: '',
    component: ChannelComponent
  },
  {
    path: 'playlist/:playlistId',
    component: PlaylistComponent
  },
  {
    path: 'playlist/:playlistId/play',
    component: VideoPlayerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
