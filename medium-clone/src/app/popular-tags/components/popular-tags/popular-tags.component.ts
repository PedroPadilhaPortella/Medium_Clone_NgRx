import { popularTagsSelector, isLoadingSelector, errorSelector } from './../../store/selector';
import { Observable } from 'rxjs';
import { getPopularTagsAction } from './../../store/actions/getPopularTags';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PopularTag } from '../../types/popularTag.type';

@Component({
    selector: 'mc-popular-tags',
    templateUrl: './popular-tags.component.html',
    styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {
    popularTags$: Observable<PopularTag[] | null>;
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.initializeValues();
        this.fetchData();
    }

    initializeValues(): void {
        this.popularTags$ = this.store.pipe(select(popularTagsSelector));
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
    }

    fetchData(): void {
        this.store.dispatch(getPopularTagsAction())
    }

}
