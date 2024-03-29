import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { ArticleService } from "../../services/article.service";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from '../actions/getArticle.action';
import { Article } from './../../../shared/types/article.interface';

@Injectable()
export class GetArticleEffect {

    constructor(
        private actions$: Actions,
        private articleService: ArticleService,
    ) { }

    getArticle$ = createEffect(() => this.actions$.pipe(
        ofType(getArticleAction),
        switchMap(({ slug }) => {
            return this.articleService.getArticle(slug).pipe(
                map((article: Article) => {
                    return getArticleSuccessAction({ article })
                }),
                catchError(() => of(getArticleFailureAction()))
            );
        }),
    ));
}