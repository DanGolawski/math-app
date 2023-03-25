import { Component, Input, OnInit } from '@angular/core';
import { RecommendedBook } from 'src/app/models/book';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss'],
})
export class SingleBookComponent {
  @Input() bookData: RecommendedBook
}
