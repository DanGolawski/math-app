import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Subchapter } from 'src/app/models/book';
import { ModalController } from '@ionic/angular';
import { ExerciseDetailsComponent } from '../exercise-details/exercise-details.component';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.scss'],
})
export class ExercisesListComponent implements OnInit {

  exerciseNumbers: number[];
  subchapterId: number;

  constructor(private exercisesService: ExercisesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    const subchapter = this.exercisesService.getCurrentSubchapter();
    this.subchapterId = subchapter.id;
    this.listExercises(subchapter);
  }

  listExercises(subchapter: Subchapter): void {
    this.exerciseNumbers = Array.from({length:subchapter.exercisesnumber}, (v,k) => k + subchapter.firstexercise);
  }

  async showExerciseDetails(exerciseNumber: number): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ExerciseDetailsComponent,
      componentProps: {subchapterId: this.subchapterId, exerciseNumber}
    });
    modal.present();
  }

}
