import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { PipesModule } from '../pipes/pipes.module';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PipesModule
  ],
  declarations: [HomePage, VideoPlayerComponent],
  providers: [ScreenOrientation]
})
export class HomePageModule {}
