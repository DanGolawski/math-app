import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ExamMenuComponent } from './exam-menu/exam-menu.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { LeavingExamRoutingModule } from './leaving-exam-routing.module';



@NgModule({
  declarations: [ExamMenuComponent, ExercisesComponent],
  imports: [
    CommonModule,
    LeavingExamRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class LeavingExamModule { }
