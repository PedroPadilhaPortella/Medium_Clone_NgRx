import { addFavoriteAction } from './../../store/actions/addFavorite.action';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavoriteService } from '../../services/favorite.service';

@Component({
    selector: 'mc-add-to-favorites',
    templateUrl: './add-to-favorites.component.html',
    styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {

    @Input('isFavorited') isFavoritedProps: boolean;
    @Input('slug') slugProps: string;
    @Input('count') countProps: number;

    favoritesCounts: number;
    isFavorited: boolean;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.isFavorited = this.isFavoritedProps;
        this.favoritesCounts = this.countProps;
    }

    handleLike(): void {
        this.store.dispatch(addFavoriteAction({ isFavorited: this.isFavorited, slug: this.slugProps }));

        if (this.isFavorited) {
            this.favoritesCounts--;
        } else {
            this.favoritesCounts++;
        }
        this.isFavorited = !this.isFavorited;
    }

}
