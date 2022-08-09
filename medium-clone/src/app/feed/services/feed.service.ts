import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FeedResponse } from '../types/feedResponse.interface';

@Injectable()
export class FeedService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getFeed(url: string): Observable<FeedResponse> {
        return this.http.get<FeedResponse>(`${this.baseUrl}${url}`);
    }
}
