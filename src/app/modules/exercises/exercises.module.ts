import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { IonicModule } from '@ionic/angular';
import { ExerciseViewerComponent } from './exercise-viewer/exercise-viewer.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [ContentListComponent, ExerciseViewerComponent],
  imports: [
    CommonModule,
    IonicModule,
    ExercisesRoutingModule,
    PipesModule
  ],
  providers: []
})
export class ExercisesModule { }
