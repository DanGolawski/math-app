import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Exercise } from 'src/app/models/book';
import { AlertController, ModalController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.scss'],
})
export class ExerciseDetailsComponent implements OnInit {

  subchapterId: number; // comes from modalCtrl
  exerciseNumber: number; // comes from modalCtrl
  exercise: Exercise;
  videoUrl: SafeResourceUrl;

  constructor(
    private exercisesService: ExercisesService,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.exercisesService.getExercise(this.subchapterId, this.exerciseNumber).subscribe({
      next: exercise => {
        if (!exercise) {
          this.showNotificationWhenExerciseNotFound();
          return;
        }
        this.exercise = exercise;
        this.videoUrl = exercise?.video ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${exercise.video}`) : null;
        console.log(this.videoUrl)
      },
      error: error => {
        console.log(error);
      }
    });
  }

  async showNotificationWhenExerciseNotFound(): Promise<void> {
    this.exercisesService.requestExerciseSolution(this.subchapterId, this.exerciseNumber);
    const alert = await this.alertController.create({
      header: 'Tego zadania jeszcze nie ma',
      subHeader: 'Właśnie dostaliśmy powiadomienie, że potrzebujesz tego zadania',
      message: 'Wróć niedługo. Będzie gotowe!',
      buttons: ['OK'],
    });
    alert.onDidDismiss().then(() => this.close())
    await alert.present();
  }

  close(): void {
    this.modalCtrl.dismiss();
  }

}
