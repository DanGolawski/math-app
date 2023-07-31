import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Exercise } from 'src/app/models/book';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.scss'],
})
export class ExerciseDetailsComponent implements OnInit {

  subchapterId: number; // comes from modalCtrl
  exerciseNumber: number; // comes from modalCtrl
  exercise: Exercise;
  exerciseNotFound = false;

  constructor(private exercisesService: ExercisesService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.exercisesService.getExercise(this.subchapterId, this.exerciseNumber).subscribe({
      next: exercise => {
        if (!exercise) {
          this.exerciseNotFound = true;
          return;
        }
        this.exercise = exercise;
      },
      error: error => {
        console.log(error);
        this.exerciseNotFound = true;
      }
    });
  }

  requestSolution(): void {
    this.exercisesService.requestExerciseSolution(this.subchapterId, this.exerciseNumber);
    this.close();
  }

  close(): void {
    this.modalCtrl.dismiss();
  }

}
