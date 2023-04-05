import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ShareService } from './services/share.service';
import { ButtonComponent } from './components/button/button.component';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [VideoPlayerComponent, ButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [VideoPlayerComponent, ButtonComponent],
  providers: [ShareService, NotificationService]
})
export class SharedModule { }
