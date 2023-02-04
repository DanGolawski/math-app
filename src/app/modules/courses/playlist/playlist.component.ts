import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeService } from '../../../youtube.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {

  protected isLoading = true;
  protected videoList: any;

  constructor(private route: ActivatedRoute, private youtubeService: YoutubeService, private router: Router) { }

  ngOnInit() {
    const playlistId = this.route.snapshot.paramMap.get('playlistId') ?? '';
    this.getVideos(playlistId);
  }

  protected openVideo(videoId: string): void {
    this.router.navigate(['play'], { relativeTo: this.route, queryParams: {videoId}})
  }

  private getVideos(playlistId: string): void {
    this.youtubeService.getVideosFromPlaylist(playlistId).subscribe(videos => {
      this.videoList = videos.items;
      this.isLoading = false;
    })
  }

}
