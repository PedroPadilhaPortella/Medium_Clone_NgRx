import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { isLoggedInSelector } from 'src/app/auth/store/selectors/authSelector';

@Component({
    selector: 'mc-feed-toggler',
    templateUrl: './feed-toggler.component.html',
    styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
    @Input('tagName') tagNameProps: string;
    isLoggedIn$: Observable<boolean>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.initializeValues();
    }

    initializeValues(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    }
}
