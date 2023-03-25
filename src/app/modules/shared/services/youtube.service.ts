import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  public getVideosFromChannel(): Observable<any> {
    return this.http.get(`${this.youtubeUrl}/search?channelId=${this.channelId}&part=snippet&order=date&maxResults=20&key=${environment.apiKey}`);
  }

  public getPlaylistsFromChannel(): Observable<any> {
    return this.http.get(`${this.youtubeUrl}/playlists?channelId=${this.channelId}&part=snippet&order=date&maxResults=50&key=${environment.apiKey}`);
  }

  public getVideosFromPlaylist(playlistId: string): Observable<any> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?channelId=${this.channelId}&part=snippet&order=date&maxResults=20&playlistId=${playlistId}&key=${environment.apiKey}`);
  }

  private get youtubeUrl(): string {
    return environment.youtubeUrl;
  }

  private get apiKey(): string {
    return environment.apiKey;
  }

  private get channelId(): string {
    return environment.channelId;
  }
}
