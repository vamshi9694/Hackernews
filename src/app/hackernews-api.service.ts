// hackernews-api.service.ts

import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
@Injectable()
export class HackerNewsAPIService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  fetchStories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/topstories.json`)
                    .pipe(map(response => response));
  }
  fetchItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
                    .pipe(map(response => response));
  }

}
