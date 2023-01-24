import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  public getVideosFromChannel(): Observable<any> {
    return this.http.get(`${this.youtubeUrl}/search?key=${this.apiKey}&channelId=${this.channelId}&part=snippet&order=date&maxResults=20`);
  }

  public getPlaylistsFromChannel(): Observable<any> {
    return this.http.get(`${this.youtubeUrl}/playlists?key=${this.apiKey}&channelId=${this.channelId}&part=snippet&order=date&maxResults=20`)
  }

  public getVideosFromPlaylist(playlistId: string): Observable<any> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?key=${this.apiKey}&channelId=${this.channelId}&part=snippet&order=date&maxResults=20&playlistId=${playlistId}`);
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
