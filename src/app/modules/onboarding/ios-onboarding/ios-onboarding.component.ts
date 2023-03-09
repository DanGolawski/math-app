import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-ios-onboarding',
  templateUrl: './ios-onboarding.component.html',
  styleUrls: ['./ios-onboarding.component.scss'],
})
export class IosOnboardingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      modules: [Navigation, Pagination],
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

}
