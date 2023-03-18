import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit, OnDestroy {

  protected videoId?: string;
  protected url = ''

  constructor(
    private screenOrientation: ScreenOrientation,
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.screenOrientation.lock('landscape');
    this.url = this.shareService.getVideoSrc()
  }

  ngOnDestroy(): void {
    this.screenOrientation.lock('portrait');
  }

}
