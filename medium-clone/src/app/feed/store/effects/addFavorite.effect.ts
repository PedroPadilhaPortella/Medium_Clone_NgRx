import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { Article } from 'src/app/shared/types/article.interface';
import { FavoriteService } from "../../services/favorite.service";
import { addFavoriteAction, addFavoriteFailureAction, addFavoriteSuccessAction } from './../actions/addFavorite.action';

@Injectable()
export class AddFavoriteEffect {

    constructor(
        private actions$: Actions,
        private favoriteService: FavoriteService,
    ) { }

    addFavorite$ = createEffect(() => this.actions$.pipe(
        ofType(addFavoriteAction),
        switchMap(({ isFavorited, slug }) => {
            const article$ = isFavorited
                ? this.favoriteService.removeFavorite(slug)
                : this.favoriteService.addFavorite(slug)

            return article$.pipe(
                map((article: Article) => {
                    return addFavoriteSuccessAction({ article })
                }),
                catchError(() => of(addFavoriteFailureAction()))
            );
        }),
    ));
}