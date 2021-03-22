import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ListItem } from '../models/list-item.model';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  constructor(private http: HttpClient) {
  }

  getList(searchKey: string): Observable<Array<ListItem> | HttpErrorResponse> {
    return this.http.get(`https://www.reddit.com/r/${searchKey}.json`)
      .pipe(map(this.mapRes),
        catchError((err: HttpErrorResponse): Observable<HttpErrorResponse> => {
          return throwError(err);
        }));
  }

  private mapRes = (res: any): Array<ListItem> => {
    const mappedRes = [];
    for (const item of res.data.children) {
      mappedRes.push(new ListItem({
        id: item.data.id,
        name: item.data.title,
        ups: item.data.ups,
        downs: item.data.downs,
        upvoteRatio: item.data.upvote_ratio,
        content: item.data.selftext
      }));
    }
    return mappedRes;
  }
}
