import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComModule } from "../com/com.module";
import { IndexComponent } from './index/index.component';
import { FindMusicComponent } from './find-music/find-music.component';
import { IndexRoutingModule } from './index-routing.module';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [IndexComponent, FindMusicComponent, PlayerComponent],
  imports: [
    CommonModule,
    ComModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
