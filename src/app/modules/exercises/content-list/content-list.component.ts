import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookShort, Chapter, Subchapter } from 'src/app/models/book';
import { NotificationService } from '../../shared/services/notification.service';
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
    private shareService: ShareService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.exercisesService.getBooks().subscribe({
      next: books => {
        this.books = books;
        this.isLoading = false;
      },
      error: err => this.notificationService.showError('Coś poszło nie tak :(')
    });
  }

  protected getChaptersForBook(book: BookShort): void {
    this.selectedBook = book;
    this.isLoading = true;
    this.exercisesService.getChaptersForBook(book.id).subscribe({
      next: chapters => {
        this.bookChapters = chapters;
        this.isLoading = false;
      },
      error: err => this.notificationService.showError('Coś poszło nie tak :(')
    });
  }

  protected showExercises(subchapter: Subchapter): void {
    this.shareService.setSubchapter(subchapter);
    this.router.navigateByUrl('exercises/showexercises')
  }

  protected sortSubchapters(subchapters: Subchapter[]): Subchapter[] {
    return subchapters.sort((s1, s2) => s1.number > s2.number ? 1 : -1);
  }

}
