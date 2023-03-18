import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  constructor(private route: ActivatedRoute, private exercisesService: ExercisesService, private shareService: ShareService) { }

  ngOnInit() {
    this.selectedSubchapter = this.shareService.getSubchapter();
    this.exercises = [...Array(this.selectedSubchapter.numberOfExercises).keys()].map(num => num + this.selectedSubchapter.firstExerciseNumber);
  }

  protected showImage(exerciseNumber: number): void {
    this.isLoading = true;
    const chapterDetails = (({ bookId, chapterNumber, number }) => ({ bookId, chapterNumber, number }))(this.selectedSubchapter);
    this.exercisesService.getExercise(exerciseNumber, chapterDetails).subscribe(exercise => {
      this.selectedExercise = exercise;
      if (!exercise.imageUrl) {
        this.isLoading = false;
      }
    });
    menuController.toggle();
  }

  protected imageIsLoaded(): void {
    this.isLoading = false;
  }

}
