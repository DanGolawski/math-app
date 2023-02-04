import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ExercisesService } from '../exercises.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {

  protected books: Book[];
  protected selectedBook: any;
  protected imgUrl = '';

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.getBooks();
  }

  private getBooks(): void {
    this.exercisesService.getBooksWithChapters().subscribe(books => {
      this.books = books
    });
  }

}
