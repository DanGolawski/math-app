import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() iconName: string;
  @Input() thumbnailUrl: string;
  @Input() fullWidth = false;

}
