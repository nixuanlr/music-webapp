import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { FindMusicComponent } from './find-music/find-music.component';

@NgModule({
  declarations: [IndexComponent, FindMusicComponent],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
