import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookShort, Chapter, Subchapter } from 'src/app/models/book';
import { ShareService } from '../../shared/services/share.service';
import { ExercisesService } from '../exercises.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {

  protected books: BookShort[];
  protected bookChapters: Chapter[];
  protected selectedBook: BookShort | null;
  protected imgUrl = '';
  protected isLoading = true;

  constructor(
    private exercisesService: ExercisesService,
    private router: Router,
    private shareService: ShareService) { }

  ngOnInit() {
    this.exercisesService.getBooks().subscribe(books => {
      this.books = books;
      this.isLoading = false;
    });
  }

  protected getChaptersForBook(book: BookShort): void {
    this.selectedBook = book;
    this.exercisesService.getChaptersForBook(book.id).subscribe(chapters => this.bookChapters = chapters);
  }

  protected showExercises(subchapter: Subchapter): void {
    this.shareService.setSubchapter(subchapter);
    this.router.navigateByUrl('exercises/showexercises')
  }

}
