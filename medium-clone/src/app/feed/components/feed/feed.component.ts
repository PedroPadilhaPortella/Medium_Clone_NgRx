import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { errorSelector, feedSelector, isLoadingSelector } from './../../store/selector';
import { FeedResponse } from './../../types/feedResponse.interface';
import { Observable, Subscription } from 'rxjs';
import { getFeedAction } from './../../store/actions/getFeed';
import { select, Store } from '@ngrx/store';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
    @Input('url') urlProps: string;
    queryParamsSubscription: Subscription;
    baseUrl: string;
    limit: number = environment.limit;
    currentPage: number;

    feed$: Observable<FeedResponse | null>;
    error$: Observable<string | null>;
    isLoading$: Observable<boolean>;

    constructor(
        private store: Store,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.fetchData();
        this.initializeListeners();
        this.initializeValues();
    }
        
    fetchData() {
        this.store.dispatch(getFeedAction({ url: this.urlProps }))
    }

    initializeListeners(): void {
        this.queryParamsSubscription = this.route.queryParams
        .subscribe((params: Params) => {
            this.currentPage = Number(params['page'] || '1');
            console.log(this.currentPage)
        });
    }
    
    initializeValues(): void {
        this.urlProps = this.router.url.split('?')[0];
        this.feed$ = this.store.pipe(select(feedSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe();
    }
}
