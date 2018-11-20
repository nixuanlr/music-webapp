import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'music-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  menus: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.menus = this.initMenu();
  }

  initMenu() {
    let menus = [];
    //
    menus.push(new MenuItem(0, '推荐', '' , [
      new MenuItem(1, '发现音乐', 'main/find', null, true, {}, 0),
      new MenuItem(2, '私人MF', 'main/MF', null, false, {}, 0),
      new MenuItem(3, '视频', 'main/video', null, false, {}, 0),
      new MenuItem(4, '朋友', 'main/friend', null, false, {}, 0),
    ] ));
    //
    menus.push(new MenuItem(100, '我的音乐', '', [
      new MenuItem(101, '本地音乐', 'main/friend', null, false, {}, 100),
      new MenuItem(102, '下载管理', 'main/friend', null, false, {}, 100),
      new MenuItem(103, '音云', 'main/friend', null, false, {}, 100)
    ]));
    //
    menus.push(new MenuItem(200, '我的歌单'));
    //
    return menus;
  }
   //
   go2(subMenu: MenuItem) {
    subMenu.isActive = !subMenu.isActive;
    window.location.href = subMenu.herf;
  }
}

export class MenuItem {
  id?: number;
  pId?: number;
  name?: string;
  herf?: string;
  params?: Object;
  isActive?: boolean;
  children?: MenuItem[];

  constructor(id?: number, name?: string , herf?: string, children?: MenuItem[], isActive?: boolean, params?: Object, pId?: number, ) {
    this.id = id;
    this.name = name;
    this.herf = herf;
    this.params = params;
    this.pId = pId;
    this.isActive = isActive;
    this.children = children;
  }
}
