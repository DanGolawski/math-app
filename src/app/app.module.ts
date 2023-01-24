import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { HomePage } from './home/home.page';
import { ChannelComponent } from './channel/channel.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [AppComponent, HomePage, ChannelComponent, PlaylistComponent, VideoPlayerComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    PipesModule,
  ],
  providers: [ScreenOrientation, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
