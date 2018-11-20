import { Component, OnInit } from '@angular/core';
import { IndexService, Recommend } from 'src/app/services/index.service';

@Component({
  selector: 'music-find-music',
  templateUrl: './find-music.component.html',
  styleUrls: ['./find-music.component.scss']
})
export class FindMusicComponent implements OnInit {

  constructor(private service: IndexService) { }

  recommend: Recommend;
  ngOnInit() {
    this.service.getRecommond().then( res => {
      this.recommend = res;
    }).catch( () => {

    });
  }

}
