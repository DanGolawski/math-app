import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ExercisesService } from '../exercises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit, OnDestroy {

  books: Book[];
  subscriptions = new Subscription();

  constructor(
    private exercisesService: ExercisesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    const sub = this.exercisesService.getBooks().subscribe(books => this.books = books);
    this.subscriptions.add(sub);
  }

  showBookChapters(bookId: number): void {
    this.router.navigate([`${bookId}`], { relativeTo: this.route})
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }

}
