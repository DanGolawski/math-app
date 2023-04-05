import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video';
import { MathAppApiService } from '../../shared/services/math-app-api.service';
import { NotificationService } from '../../shared/services/notification.service';
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
    private shareService: ShareService,
    private notificationService: NotificationService
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
      error: err => this.notificationService.showError('Coś poszło nie tak :(')
    });
  }

  public playVideo(video: Video): void {
    this.shareService.setVideoSrc(video.url);
    this.router.navigate(['self-improvement/videos/player']);
  }

}
