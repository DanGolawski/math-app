import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from 'src/app/models/video';

@Injectable({
  providedIn: 'root'
})
export class MathAppApiService {

  constructor(private http: HttpClient) { }

  public getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>('https://math-app-backend-ybsr.onrender.com/videos');
  }
}
