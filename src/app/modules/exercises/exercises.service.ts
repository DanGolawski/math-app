import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, Chapter, Exercise, Subchapter } from 'src/app/models/book';
import { endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  subchapterState: Subchapter;
  
  constructor(private http: HttpClient) { }

  public setCurrentSubchapter(chapter: Subchapter): void {
    this.subchapterState = chapter;
  }

  public getCurrentSubchapter(): Subchapter {
    return this.subchapterState;
  }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(endpoints.books);
  }

  public getChaptersForBook(bookId: string): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(endpoints.chapters(bookId));
  }

  public getExercise(subchapterId: number, exerciseNumber: number): Observable<Exercise> {
    return this.http.get<Exercise>(endpoints.exercises(subchapterId, exerciseNumber));
  }

  public requestExerciseSolution(subchapterId: number, exerciseNumber: number): void {
    this.http.post(endpoints.requestExercise, {subchapter: subchapterId, exercise: exerciseNumber}).subscribe();
  }
}
