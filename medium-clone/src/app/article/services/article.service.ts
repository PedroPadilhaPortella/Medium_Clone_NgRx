import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Article } from '../../shared/types/article.interface';
import { ArticleResponse } from '../../shared/types/articleReponse.interface';

@Injectable()
export class ArticleService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getArticle(slug: string): Observable<Article> {
        return this.http.get<ArticleResponse>(`${this.baseUrl}articles/${slug}`)
        .pipe(map((response: ArticleResponse) => response.article));
    }
    
    deleteArticle(slug: string): Observable<{}> {
        return this.http.delete(`${this.baseUrl}articles/${slug}`);
    }
}
