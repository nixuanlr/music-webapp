import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'music-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  time: any;
  ngOnInit() {
    this.time = this.getDate();
  }

  getDate() {
    return new Date().getDate;
  }



}
