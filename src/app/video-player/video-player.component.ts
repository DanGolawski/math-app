import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit, OnDestroy {

  protected videoId?: string;
  protected url = ''

  constructor(private route: ActivatedRoute, private screenOrientation: ScreenOrientation) { }

  ngOnInit() {
    this.screenOrientation.lock('landscape');
    this.route.queryParams.subscribe((params: any) => {
      this.url = `https://www.youtube.com/embed/${params.videoId}`
    });
  }

  ngOnDestroy(): void {
    this.screenOrientation.lock('portrait');
  }

}
