import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menuController } from '@ionic/core';
import { getStorage, ref, list, getDownloadURL, FirebaseStorage } from "firebase/storage";
import { Exercise } from 'src/app/models/book';

@Component({
  selector: 'app-exercise-viewer',
  templateUrl: './exercise-viewer.component.html',
  styleUrls: ['./exercise-viewer.component.scss'],
})
export class ExerciseViewerComponent implements OnInit {

  protected exercises: Exercise[];
  protected subchapterNumber: number;
  protected selectedImageUrl: string;
  protected selectedImageName: string;
  protected isLoading = false;
  protected bookid: string | null;
  protected chapterNumber: number;
  private storage: FirebaseStorage;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.storage = getStorage();
    this.getExercises(this.getFolderPath());
  }

  protected showImage(exercise: Exercise): void {
    this.isLoading = true;
    this.selectedImageUrl = exercise.url;
    this.selectedImageName = exercise.name;
    menuController.toggle();
  }

  protected imageIsLoaded(): void {
    this.isLoading = false;
  }

  private async getExercises(exercisesPath: string): Promise<void> {
    const exercisesFolderRef = ref(this.storage, exercisesPath);
    const exercises = await list(exercisesFolderRef);
    this.exercises = await Promise.all(exercises.items.map(async exercise => ({id: this.getIdByName(exercise.name) ,name: exercise.name, url: await getDownloadURL(exercise)})));
    this.exercises.sort((ex1, ex2) => ((ex1.id ?? 0) > (ex2.id ?? 0)) ? 1 : -1);
    console.log(this.exercises)
  }

  private getIdByName(exerciseName: string): number {
    return +exerciseName.split('.')[0]
  }

  private getFolderPath(): string {
    this.bookid = this.route.snapshot.paramMap.get('bookid');
    this.chapterNumber = +(this.route.snapshot.paramMap.get('chapter') ?? '');
    this.subchapterNumber = +(this.route.snapshot.paramMap.get('subchapter') ?? '');
    return `${this.bookid}/${this.chapterNumber}/${this.subchapterNumber}`;
  }

}
