import { Component, OnInit } from '@angular/core';
import { menuController } from '@ionic/core';
import { Exercise, Subchapter } from 'src/app/models/book';
import { ShareService } from '../../shared/services/share.service';
import { ExercisesService } from '../exercises.service';

@Component({
  selector: 'app-exercise-viewer',
  templateUrl: './exercise-viewer.component.html',
  styleUrls: ['./exercise-viewer.component.scss'],
})
export class ExerciseViewerComponent implements OnInit {

  protected selectedExercise: Exercise;
  protected isLoading = false;
  protected exercises: number[];
  protected selectedSubchapter: Subchapter;
  
  constructor(private exercisesService: ExercisesService, private shareService: ShareService) { }

  ngOnInit() {
    this.selectedSubchapter = this.shareService.getSubchapter();
    this.exercises = Array.from({length: this.selectedSubchapter.numberofexercises}, (x, i) => i).map(num => num + this.selectedSubchapter.firstexercisenumber);
  }

  protected showImage(exerciseNumber: number): void {
    this.isLoading = true;
    const chapterDetails = (({ bookid, chapternumber, number }) => ({ bookid, chapternumber, number }))(this.selectedSubchapter);
    this.exercisesService.getExercise(exerciseNumber, chapterDetails).subscribe({
      next: exercise => {
        this.selectedExercise = exercise;
        if (!exercise.imageurl) {
          this.isLoading = false;
        }
      },
      error: err => window.alert(`Wystąpił błąd. Spróbuj później (${err.status})`)
    });
    menuController.toggle();
  }

  protected imageIsLoaded(): void {
    this.isLoading = false;
  }

}
