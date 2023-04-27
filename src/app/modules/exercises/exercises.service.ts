import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BookShort, Chapter, Exercise, Subchapter } from 'src/app/models/book';
import { endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  
  constructor(private http: HttpClient) { }

  public getBooks(): Observable<BookShort[]> {
    return this.http.get<BookShort[]>(endpoints.books);
  }

  public getChaptersForBook(bookId: string): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(endpoints.chapters(bookId));
  }

  public getExercise(exerciseNumber: number, subchapterDetails: Partial<Subchapter>): Observable<Exercise> {
    const queryParams = {
      number: exerciseNumber,
      bookId: subchapterDetails.bookid,
      chapterNumber: subchapterDetails.chapternumber,
      subchapterNumber: subchapterDetails.number
    }
    return this.http.get<Exercise>(endpoints.exercises, {params: new HttpParams({fromObject: queryParams})});
  }
}
