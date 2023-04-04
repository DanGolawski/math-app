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
  protected isLoading = true;

  constructor(
    private apiService: MathAppApiService,
    private router: Router,
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.getListOfVideos();
  }

  private getListOfVideos(): void {
    this.apiService.getVideos().subscribe({
      next: videos => {
        this.videos = videos;
        this.isLoading = false;
      },
      error: err => window.alert(`Wystąpił błąd. Spróbuj później (${err.status})`)
    });
  }

  public playVideo(video: Video): void {
    this.shareService.setVideoSrc(video.url);
    this.router.navigate(['self-improvement/videos/player']);
  }

}
