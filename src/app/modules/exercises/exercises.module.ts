import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { BooksListComponent } from './books-list/books-list.component';
import { ChaptersListComponent } from './chapters-list/chapters-list.component';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';



@NgModule({
  declarations: [BooksListComponent, ChaptersListComponent, ExercisesListComponent, ExerciseDetailsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ExercisesRoutingModule,
    PipesModule,
    SharedModule
  ],
  providers: []
})
export class ExercisesModule { }
