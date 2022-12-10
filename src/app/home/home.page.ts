import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable, of, delay } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  // apikey - AIzaSyB28Q2vsOYPohxrhgVbwkQR4OS3nQLetEo
  // channel id - UCpRSDLbsLxYf-wYDycO597Q
  // https://www.googleapis.com/youtube/v3/search?key={your_key_here}&channelId={channel_id_here}&part=snippet,id&order=date&maxResults=20

  protected videoList: any;
  protected showStartScreen = true;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    forkJoin([this.animateStartScreen(), this.getVideosFromChannel()]).subscribe(startProperties => {
      this.showStartScreen = false;
      this.videoList = startProperties[1].items;
    })
    
  }

  protected openVideo(videoId: string): void {
    this.router.navigate(['./player'], { relativeTo: this.route, queryParams: {videoId}})
  }

  protected animateStartScreen(): Observable<any> {
    return of(null).pipe(delay(2000));
  }

  private getVideosFromChannel(): Observable<any> {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyB28Q2vsOYPohxrhgVbwkQR4OS3nQLetEo&channelId=UCpRSDLbsLxYf-wYDycO597Q&&part=snippet&order=date&maxResults=20');
  }

}
