import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CommentFeedResponse } from 'src/app/shared/types/commentFeedResponse.interface';
import { CommentInput } from 'src/app/shared/types/commentInput.interface';
import { CommentResponse } from 'src/app/shared/types/commentResponse.interface';
import { environment } from '../../../environments/environment';
import { Article } from '../../shared/types/article.interface';
import { ArticleResponse } from '../../shared/types/articleReponse.interface';
import { ArticleInput } from './../../shared/types/articleInput.interface';
import { Comment } from './../../shared/types/comment.interface';

@Injectable()
export class ArticleService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getArticle(slug: string): Observable<Article> {
        return this.http.get<ArticleResponse>(`${this.baseUrl}articles/${slug}`)
            .pipe(map((response: ArticleResponse) => response.article));
    }

    createArticle(article: ArticleInput): Observable<Article> {
        return this.http.post<ArticleResponse>(`${this.baseUrl}articles`, { article: article })
            .pipe(map((response) => response.article));
    }

    updateArticle(slug: string, article: ArticleInput): Observable<Article> {
        return this.http.put<ArticleResponse>(`${this.baseUrl}articles/${slug}`, { article: article })
            .pipe(map((response) => response.article));
    }

    deleteArticle(slug: string): Observable<{}> {
        return this.http.delete(`${this.baseUrl}articles/${slug}`);
    }

    
    getComments(slug: string): Observable<Comment[]> {
        return this.http.get<CommentFeedResponse>(`${this.baseUrl}articles/${slug}/comments`)
            .pipe(map((response: CommentFeedResponse) => response.comments));
    }

    createComment(slug: string, comment: CommentInput): Observable<Comment> {
        return this.http.post<CommentResponse>(`${this.baseUrl}articles/${slug}/comments`,
            { comment: comment })
            .pipe(map((response: CommentResponse) => response.comment));
    }

    deleteComment(slug: string, commentId: number): Observable<{}> {
        return this.http.delete(`${this.baseUrl}articles/${slug}/comments/${commentId}`);
    }
}
