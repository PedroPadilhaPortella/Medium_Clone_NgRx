import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Article } from 'src/app/shared/types/article.interface';
import { ArticleService } from '../../services/article.service';
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from './../actions/createArticle.action';

@Injectable()
export class CreateArticleEffect {

    constructor(
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router,
    ) { }

    createArticle$ = createEffect(() => this.actions$.pipe(
        ofType(createArticleAction),
        switchMap(({ article }) => {
            return this.articleService.createArticle(article).pipe(
                map((article: Article) => {
                    return createArticleSuccessAction({ article })
                }),
                catchError((errorResponse: HttpErrorResponse) => of(createArticleFailureAction({ errors: errorResponse.error.errors })))
            );
        }),
    ));

    redirectAfterCreate$ = createEffect(() => this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => {
            this.router.navigate(['/articles', article.slug]);
        }),
    ), { dispatch: false });
}