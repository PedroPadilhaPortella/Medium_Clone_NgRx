import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { getPopularTagsAction, getPopularTagsSuccessAction } from '../actions/getPopularTags.action';
import { PopularTagsService } from './../../services/popular-tags.service';
import { PopularTag } from './../../types/popularTag.type';
import { getPopularTagsFailureAction } from '../actions/getPopularTags.action';

@Injectable()
export class GetPopularTagsEffect {

    constructor(
        private actions$: Actions,
        private popularTagsService: PopularTagsService,
    ) { }

    getPopularTags$ = createEffect(() => this.actions$.pipe(
        ofType(getPopularTagsAction),
        switchMap(() => {
            return this.popularTagsService.getPopularTags().pipe(
                map((popularTags: PopularTag[]) => {
                    return getPopularTagsSuccessAction({ popularTags })
                }),
                catchError(() => of(getPopularTagsFailureAction()))
            );
        }),
    ));
}