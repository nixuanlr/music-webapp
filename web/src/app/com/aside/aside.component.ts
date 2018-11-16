import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'music-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initMenu() {
    const menus = [];
    //
    menus.push(new MenuItem(0, '推荐'));
    menus.push(new MenuItem(1, '发现音乐', 'main/find', {}, 0));
    menus.push(new MenuItem(2, '私人MF', 'main/MF', {}, 0));
    menus.push(new MenuItem(3, '视频', 'main/video', {}, 0));
    menus.push(new MenuItem(4, '朋友', 'main/friend', {}, 0));
    //
    menus.push(new MenuItem(100, '我的音乐'));
    menus.push(new MenuItem(101, '本地音乐', 'main/friend', {}, 100));
    menus.push(new MenuItem(102, '下载管理', 'main/friend', {}, 100));
    menus.push(new MenuItem(103, '音云', 'main/friend', {}, 100));
    //
    menus.push(new MenuItem(200, '我的歌单'));
    //
    return menus;
  }
}

export class MenuItem {
  id?: number;
  pId?: number;
  name?: string;
  herf: string;
  params: Object;
  children?: MenuItem[];

  constructor(id?: number, name?: string , herf?: string, params?: Object, pId?: number) {
    this.id = id;
    this.name = name;
    this.herf = herf;
    this.params = params;
    this.pId = pId;
  }
}
