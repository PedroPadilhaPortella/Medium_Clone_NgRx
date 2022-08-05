import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Article } from 'src/app/shared/types/article.interface';
import { ArticleService } from '../../services/article.service';
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from '../actions/updateArticle.action';

@Injectable()
export class UpdateArticleEffect {

    constructor(
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router,
    ) { }

    updateArticle$ = createEffect(() => this.actions$.pipe(
        ofType(updateArticleAction),
        switchMap(({ slug, article }) => {
            return this.articleService.updateArticle(slug, article).pipe(
                map((article: Article) => {
                    return updateArticleSuccessAction({ article })
                }),
                catchError((errorResponse: HttpErrorResponse) => of(updateArticleFailureAction({ errors: errorResponse.error.errors })))
            );
        }),
    ));

    redirectAfterUpdate$ = createEffect(() => this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
            this.router.navigate(['/articles', article.slug]);
        }),
    ), { dispatch: false });
}