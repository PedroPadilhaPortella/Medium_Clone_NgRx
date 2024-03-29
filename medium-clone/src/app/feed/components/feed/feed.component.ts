import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { errorSelector, feedSelector, isLoadingSelector } from './../../store/selector';
import { FeedResponse } from './../../types/feedResponse.interface';
import { Observable, Subscription } from 'rxjs';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { select, Store } from '@ngrx/store';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { stringify, parseUrl } from 'query-string';

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
    @Input('url') apiUrlProps: string

    feed$: Observable<FeedResponse | null>
    error$: Observable<string | null>
    isLoading$: Observable<boolean>
    limit = environment.limit
    baseUrl: string
    queryParamsSubscription: Subscription
    currentPage: number

    constructor(
        private store: Store,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.initializeValues()
        this.initializeListeners()
    }

    ngOnChanges(changes: SimpleChanges): void {
        const isApiChanged = !changes['apiUrlProps'].firstChange
            && changes['apiUrlProps'].currentValue !== changes['apiUrlProps'].previousValue;

        if (isApiChanged) {
            this.fetchFeed();
        }
    }

    initializeListeners(): void {
        this.queryParamsSubscription = this.route.queryParams.subscribe(
            (params: Params) => {
                this.currentPage = Number(params['page'] || '1');
                this.fetchFeed();
            }
        )
    }

    initializeValues(): void {
        this.feed$ = this.store.pipe(select(feedSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.baseUrl = this.router.url.split('?')[0]
    }

    fetchFeed(): void {
        const offset = this.currentPage * this.limit - this.limit
        const parsedUrl = parseUrl(this.apiUrlProps)
        const stringifiedParams = stringify({
            limit: this.limit,
            offset,
            ...parsedUrl.query
        })
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
        this.store.dispatch(getFeedAction({ url: apiUrlWithParams }))
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe()
    }
}
