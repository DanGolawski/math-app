import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';
import { BooksComponent } from './books/books.component';
import { SelfImprovementMenuComponent } from './self-improvement-menu/self-improvement-menu.component';
import { IonicModule } from '@ionic/angular';
import { SelfImprovementRoutingModule } from './self-improvement-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SelfImprovementMenuComponent,
    VideosComponent,
    BooksComponent
  ],
  imports: [
    SelfImprovementRoutingModule,
    CommonModule,
    IonicModule,
    SharedModule
  ]
})
export class SelfImprovementModule { }
