import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { ServiceUtil } from './service-util';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  commonParams = {
    g_tk: 5381,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp',
    jsonpCallback: 'tan0'
  };

  constructor(private http: HttpClient) { }

  getRecommond(): Promise<Recommend> {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
    const params = Object.assign({},  new HttpParams().set('_', new Date().getTime().toString()), this.commonParams );
    const option: any = Object.assign({}, { withCredentials: true });
    option.params = params;
    return this.http.jsonp(url, 'jsonpCallback').toPromise().then( result => {
      console.log(result);
      return ServiceUtil.extractData(result);
    }).catch( ServiceUtil.handleError);
  }

}

export class Slider {
  linkUrl: string;
  id: number;
  picUrl: string;
}

export class Radio {
  Ftitle: string;
  radioid: number;
  picUrl: string;
}

export class Song {

}

export class Recommend {
  slider: Slider [];
  radioList: Radio[];
  songList: Song[];
}
