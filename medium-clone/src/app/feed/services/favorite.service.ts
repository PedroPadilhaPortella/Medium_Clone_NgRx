import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../../shared/types/article.interface';
import { environment } from 'src/environments/environment';
import { ArticleResponse } from '../../shared/types/articleReponse.interface';

@Injectable()
export class FavoriteService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    addFavorite(slug: string): Observable<Article> {
        return this.http.post<ArticleResponse>(`${this.baseUrl}articles/${slug}/favorite`, {})
            .pipe(map((response: ArticleResponse) => response.article));
    }
    removeFavorite(slug: string): Observable<Article> {
        return this.http.delete<ArticleResponse>(`${this.baseUrl}articles/${slug}/favorite`)
            .pipe(map((response: ArticleResponse) => response.article));
    }
}
