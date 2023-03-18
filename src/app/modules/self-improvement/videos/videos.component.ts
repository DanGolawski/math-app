import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video';
import { MathAppApiService } from '../../shared/services/math-app-api.service';
import { ShareService } from '../../shared/services/share.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {

  protected videos: Video[] = [];

  constructor(
    private apiService: MathAppApiService,
    private router: Router,
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.getListOfVideos();
  }

  private getListOfVideos(): void {
    this.apiService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

  public playVideo(video: Video): void {
    this.shareService.setVideoSrc(video.url);
    this.router.navigate(['self-improvement/videos/player']);
  }

}
