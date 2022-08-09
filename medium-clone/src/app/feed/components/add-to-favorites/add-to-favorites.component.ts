import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors/authSelector';
import { addFavoriteAction } from './../../store/actions/addFavorite.action';

@Component({
    selector: 'mc-add-to-favorites',
    templateUrl: './add-to-favorites.component.html',
    styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {

    @Input('isFavorited') isFavoritedProps: boolean;
    @Input('slug') slugProps: string;
    @Input('count') countProps: number;
    isLoggedIn$: Observable<boolean>;

    favoritesCounts: number;
    isFavorited: boolean;

    constructor(private store: Store, private router: Router) { }

    ngOnInit(): void {
        this.initializeValues();
    }

    initializeValues(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
        this.isFavorited = this.isFavoritedProps;
        this.favoritesCounts = this.countProps;
    }

    handleLike(): void {
        this.isLoggedIn$.subscribe((isLoggedIn) => {
            if (!isLoggedIn) {
                this.router.navigateByUrl('login');
            }

            this.store.dispatch(addFavoriteAction({ isFavorited: this.isFavorited, slug: this.slugProps }));

            if (this.isFavorited) {
                this.favoritesCounts--;
            } else {
                this.favoritesCounts++;
            }
            this.isFavorited = !this.isFavorited;
        });
    }

}
