import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { FindMusicComponent } from './find-music/find-music.component';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  declarations: [IndexComponent, FindMusicComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
