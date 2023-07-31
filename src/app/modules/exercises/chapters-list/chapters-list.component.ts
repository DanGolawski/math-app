import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter, Subchapter } from 'src/app/models/book';

@Component({
  selector: 'app-chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.scss'],
})
export class ChaptersListComponent implements OnInit {

  chapters: Chapter[];

  constructor(
    private exercisesService: ExercisesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => this.getChapters(paramMap.get('bookId')));
  }

  getChapters(bookId: string): void {
    this.exercisesService.getChaptersForBook(bookId).subscribe(chapters => this.chapters = chapters);
  }

  showExercises(subchapter: Subchapter): void {
    this.exercisesService.setCurrentSubchapter(subchapter);
    this.router.navigate([`../showexercises/${subchapter.id}`], { relativeTo: this.route})
  }

}
