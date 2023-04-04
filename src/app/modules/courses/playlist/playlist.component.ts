import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShareService } from '../../shared/services/share.service';
import { YoutubeService } from '../../shared/services/youtube.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {

  protected isLoading = true;
  protected videoList: any;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
    private router: Router, 
    private shareService: ShareService
  ) { }

  ngOnInit() {
    const playlistId = this.route.snapshot.paramMap.get('playlistId') ?? '';
    this.getVideos(playlistId);
  }

  protected openVideo(videoId: string): void {
    this.shareService.setVideoSrc(`${environment.youtubeEmbeded}/${videoId}`);
    this.router.navigate(['play'], { relativeTo: this.route})
  }

  private getVideos(playlistId: string): void {
    this.youtubeService.getVideosFromPlaylist(playlistId).subscribe({
      next: videos => {
        this.videoList = videos.items;
        this.isLoading = false;
      },
      error: err => window.alert(`Wystąpił błąd. Spróbuj później (${err.status})`)
    })
  }

}
