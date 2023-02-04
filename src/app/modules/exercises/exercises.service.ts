import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http: HttpClient) { }

  public getBooksWithChapters(): Observable<any> {
    return this.http.get('assets/books-structure.json')
  }
}
