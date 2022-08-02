import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { FeedService } from '../../services/feed.service';
import { FeedResponse } from '../../types/feedResponse.interface';
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from '../actions/getFeed.action';

@Injectable()
export class GetFeedEffect {

    constructor(
        private actions$: Actions,
        private feedService: FeedService,
    ) { }

    getFeed$ = createEffect(() => this.actions$.pipe(
        ofType(getFeedAction),
        switchMap(({ url }) => {
            return this.feedService.getFeed(url).pipe(
                map((feed: FeedResponse) => {
                    return getFeedSuccessAction({ feed })
                }),
                catchError(() => of(getFeedFailureAction()))
            );
        }),
    ));
}