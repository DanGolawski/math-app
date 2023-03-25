import { Component, OnInit } from '@angular/core';
import { RecommendedBook } from 'src/app/models/book';
import { MathAppApiService } from '../../shared/services/math-app-api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  protected books: RecommendedBook[];

  constructor(private apiService: MathAppApiService) { }

  ngOnInit() {
    this.apiService.getRecommendedBooks().subscribe(books => this.books = books);
  }

}
