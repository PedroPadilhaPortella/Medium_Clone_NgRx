import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { Comment } from "src/app/shared/types/comment.interface";
import { ArticleService } from "../../services/article.service";
import { getCommentAction, getCommentFailureAction, getCommentsSuccessAction } from '../actions/getComment.action';

@Injectable()
export class GetCommentEffect {

    constructor(
        private actions$: Actions,
        private articleService: ArticleService,
    ) { }

    getComment = createEffect(() => this.actions$.pipe(
        ofType(getCommentAction),
        switchMap(({ slug }) => {
            return this.articleService.getComments(slug).pipe(
                map(( comments: Comment[] ) => {
                    return getCommentsSuccessAction({ comments: comments })
                }),
                catchError(() => of(getCommentFailureAction()))
            );
        }),
    ));
}