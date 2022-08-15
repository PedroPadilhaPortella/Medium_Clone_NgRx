import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ArticleService } from '../../services/article.service';
import { deleteArticleAction, deleteArticleFailureAction, deleteArticleSuccessAction } from "../actions/deleteArticle.action";
import { deleteCommentAction, deleteCommentFailureAction, deleteCommentSuccessAction } from "../actions/deleteComment.action";

@Injectable()
export class DeleteCommentEffect {

    constructor(
        private actions$: Actions,
        private articleService: ArticleService,
    ) { }

    deleteComment$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCommentAction),
        switchMap(({ slug, commentId }) => {
            return this.articleService.deleteComment(slug, commentId).pipe(
                map(() => {
                    return deleteCommentSuccessAction()
                }),
                catchError(() => of(deleteCommentFailureAction()))
            );
        }),
    ));
}