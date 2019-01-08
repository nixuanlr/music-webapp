import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'music-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() imgs: Object [];
  @Input() isAuto: boolean;
  @Input() timeout: number;
  constructor() { }

  ngOnInit() {
  }

}
