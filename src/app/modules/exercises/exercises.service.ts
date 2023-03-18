import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookShort, Chapter, Exercise } from 'src/app/models/book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  
  constructor(private http: HttpClient) { }

  public getBooks(): Observable<BookShort[]> {
    return this.http.get<BookShort[]>(`${environment.mathAppApi}/books`);
  }

  public getChaptersForBook(bookId: string): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(`${environment.mathAppApi}/book-chapters?bookId=${bookId}`);
  }

  public getExercise(exerciseNumber: number, subchapterDetails: {bookId: string, chapterNumber: number, number: number}): Observable<Exercise> {
    const queryParams = {
      number: exerciseNumber,
      book: subchapterDetails.bookId,
      chapter: subchapterDetails.chapterNumber,
      subchapter: subchapterDetails.number
    }
    return this.http.get<Exercise>(`${environment.mathAppApi}/exercises`, {params: new HttpParams({fromObject: queryParams})});
  }
}
