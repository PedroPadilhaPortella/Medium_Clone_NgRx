import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { ArticleService } from '../../services/article.service';
import { Comment } from './../../../shared/types/comment.interface';
import { createCommentAction, createCommentFailureAction, createCommentSuccessAction } from './../actions/createComment.action';

@Injectable()
export class CreateCommentEffect {

    constructor(
        private actions$: Actions,
        private articleService: ArticleService,
    ) { }

    createComment$ = createEffect(() => this.actions$.pipe(
        ofType(createCommentAction),
        switchMap(({ commentInput, slug }) => {
            return this.articleService.createComment(slug, commentInput).pipe(
                map((comment: Comment) => {
                    return createCommentSuccessAction({ comment: comment })
                }),
                catchError((errorResponse: HttpErrorResponse) => of(createCommentFailureAction({ errors: errorResponse.error.errors })))
            );
        }),
    ));
}