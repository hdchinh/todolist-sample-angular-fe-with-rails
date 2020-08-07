import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Observable } from 'rxjs';

import { ItemConstants } from './constant';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _url = ItemConstants.GET_ITEMS_URL;

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._url);
  }

}
