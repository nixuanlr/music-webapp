import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FindMusicComponent } from './find-music/find-music.component';
const routes: Routes = [
  {path: 'index', component: IndexComponent, data: {title: '首页'}},
  {path: 'find', component: FindMusicComponent, data: {title: '发现音乐'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
