import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, filter, map, Observable, Subscription } from 'rxjs';
import { currentUserSelector } from '../../../auth/store/selectors/authSelector';
import { CurrentUser } from '../../../shared/types/currentUser.interface';
import { getUserProfileAction } from '../../store/actions/getUserProfile.action';
import { errorSelector, isLoadingSelector, userProfileSelector } from '../../store/selector';
import { UserProfile } from '../../types/userProfile.interface';

@Component({
    selector: 'mc-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

    userProfile: UserProfile;
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    userProfileSubscription: Subscription;
    isCurrentUserProfile$: Observable<boolean>;
    slug: string;

    constructor(
        private store: Store,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.initializeValues();
        this.initializeListeners();
    }

    initializeValues(): void {
        this.slug = this.route.snapshot.paramMap.get('slug');
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));

        this.isCurrentUserProfile$ = combineLatest(
            this.store.pipe(select(currentUserSelector)),
            this.store.pipe(select(userProfileSelector))
        ).pipe(
            map(([currentUser, userProfile]: [CurrentUser | null, UserProfile | null]) => {
                return currentUser.username === userProfile.username
            }),
        );
    }

    getApiUrl(): string {
        const isFavorites = this.router.url.includes('favorites');
        return isFavorites ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`;
    }

    initializeListeners() {
        this.userProfileSubscription = this.store.pipe(select(userProfileSelector), filter((Boolean)))
            .subscribe((userProfile) => {
                this.userProfile = userProfile;
            });

        this.route.params.subscribe((params: Params) => {
            this.slug = params['slug'];
            this.fetchUserProfile();
        });
    }

    fetchUserProfile(): void {
        this.store.dispatch(getUserProfileAction({ slug: this.slug }));
    }

    ngOnDestroy(): void {
        this.userProfileSubscription.unsubscribe();
    }
}
