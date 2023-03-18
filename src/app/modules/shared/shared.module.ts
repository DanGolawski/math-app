import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ShareService } from './services/share.service';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [VideoPlayerComponent],
  providers: [ShareService]
})
export class SharedModule { }
