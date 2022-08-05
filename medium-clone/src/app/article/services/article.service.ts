import { ArticleInput } from './../../shared/types/articleInput.interface';
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

    createArticle(article: ArticleInput): Observable<Article> {
        return this.http.post<ArticleResponse>(`${this.baseUrl}articles`, {article: article})
        .pipe(map((response) => response.article));
    }

    updateArticle(slug: string, article: ArticleInput): Observable<Article> {
        return this.http.put<ArticleResponse>(`${this.baseUrl}articles/${slug}`, {article: article})
        .pipe(map((response) => response.article));
    }
    
    deleteArticle(slug: string): Observable<{}> {
        return this.http.delete(`${this.baseUrl}articles/${slug}`);
    }
}
