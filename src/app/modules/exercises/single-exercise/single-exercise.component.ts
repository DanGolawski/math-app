import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/models/book';
import { ShareService } from '../../shared/services/share.service';

@Component({
  selector: 'app-single-exercise',
  templateUrl: './single-exercise.component.html',
  styleUrls: ['./single-exercise.component.scss'],
})
export class SingleExerciseComponent {

  @Input() public exerciseData: Exercise;
  @Output() private imageLoaded: EventEmitter<void> = new EventEmitter();

  constructor(
    private shareService: ShareService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  protected imageIsLoaded(): void {
    this.imageLoaded.emit();
  }

  protected openVideo(videoUrl: string): void {
    this.shareService.setVideoSrc(videoUrl);
    this.router.navigate(['/exercises/exercise-video'])
  }

}
