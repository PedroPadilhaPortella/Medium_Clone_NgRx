import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PopularTag } from '../types/popularTag.type';
import { PopularTagsResponse } from '../types/popularTagsResponse.interface';

@Injectable()
export class PopularTagsService {

    constructor(private http: HttpClient) { }

    getPopularTags(): Observable<PopularTag[]> {
        return this.http.get(`${environment.baseUrl}/tags`)
            .pipe(
                map((response: PopularTagsResponse) => response.tags)
            );
    }
}
