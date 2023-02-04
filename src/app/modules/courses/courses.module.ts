import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel/channel.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CoursesRoutingModule } from './courses-routing.module';



@NgModule({
  declarations: [ChannelComponent, PlaylistComponent, VideoPlayerComponent],
  imports: [
    CommonModule,
    IonicModule,
    CoursesRoutingModule,
    RouterModule,
    PipesModule
  ]
})
export class CoursesModule { }
