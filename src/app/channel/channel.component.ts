import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/youtube';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent implements OnInit {

  protected isLoading = true;
  protected playlists?: Playlist[];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.getPlaylists();
  }

  private getPlaylists(): void {
    this.youtubeService.getPlaylistsFromChannel().subscribe(playlists => {
      this.playlists = playlists.items;
      this.isLoading = false;
    })
  }

}