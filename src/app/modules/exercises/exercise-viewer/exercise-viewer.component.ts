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
  protected selectedImageUrl: string
  protected isLoading = false;
  private storage: FirebaseStorage;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.storage = getStorage();
    this.getExercises(this.getFolderPath());
  }

  protected showImage(imgUrl: string): void {
    this.isLoading = true;
    this.selectedImageUrl = imgUrl;
    menuController.toggle();
  }

  protected imageIsLoaded(): void {
    this.isLoading = false;
  }

  private async getExercises(exercisesPath: string): Promise<void> {
    const exercisesFolderRef = ref(this.storage, exercisesPath);
    const exercises = await list(exercisesFolderRef);
    this.exercises = await Promise.all(exercises.items.map(async exercise => ({name: exercise.name, url: await getDownloadURL(exercise)})));
  }

  private getFolderPath(): string {
    const bookid = this.route.snapshot.paramMap.get('bookid');
    const chapterNumber = +(this.route.snapshot.paramMap.get('chapter') ?? '');
    this.subchapterNumber = +(this.route.snapshot.paramMap.get('subchapter') ?? '');
    return `${bookid}/${chapterNumber}/${this.subchapterNumber}`;
  }

}
