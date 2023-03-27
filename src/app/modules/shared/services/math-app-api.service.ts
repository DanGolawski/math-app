import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecommendedBook } from 'src/app/models/book';
import { Video } from 'src/app/models/video';
import { endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class MathAppApiService {

  constructor(private http: HttpClient) { }

  public getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(endpoints.recommendedVideos);
  }

  public getRecommendedBooks(): Observable<RecommendedBook[]> {
    return this.http.get<RecommendedBook[]>(endpoints.recommendedBooks);
  }
}
