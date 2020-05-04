import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  componentsList = [
    { img: 'assets/images/1.jpg', description: 'Some description picture one' },
    { img: 'assets/images/2.jpg', description: 'Some description picture two' },
    { img: 'assets/images/3.jpg', description: 'Some description picture three' },
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

}
