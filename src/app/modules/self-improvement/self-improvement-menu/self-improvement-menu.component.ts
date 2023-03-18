import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../shared/services/share.service';

@Component({
  selector: 'app-self-improvement-menu',
  templateUrl: './self-improvement-menu.component.html',
  styleUrls: ['./self-improvement-menu.component.scss'],
})
export class SelfImprovementMenuComponent implements OnInit {

  constructor(private shareService: ShareService) { }

  ngOnInit() {
    console.log(this.shareService.getVideoSrc())
  }

}
