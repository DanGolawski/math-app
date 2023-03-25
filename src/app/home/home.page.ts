import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from '../modules/shared/services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  protected videoList: any;
  protected showStartScreen = true;

  constructor(private http: HttpClient, private route: ActivatedRoute, private shareService: ShareService) {}

  ngOnInit(): void {
    setTimeout(() => this.showStartScreen = false, 2000);
  }

}
