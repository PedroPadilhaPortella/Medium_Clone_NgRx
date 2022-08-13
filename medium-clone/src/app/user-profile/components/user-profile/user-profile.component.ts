import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    apiUrl: string;
    slug: string;

    constructor(
        private store: Store,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.initializeValues();
        this.initializeListeners();
        this.fetchData();
    }

    initializeValues(): void {
        const isFavorites = this.router.url.includes('favorites');
        this.slug = this.route.snapshot.paramMap.get('slug');

        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));

        this.apiUrl = isFavorites
            ? `/articles?favorited=${this.slug}`
            : `/articles?author=${this.slug}`;

        this.isCurrentUserProfile$ = combineLatest(
            this.store.pipe(select(currentUserSelector)),
            this.store.pipe(select(userProfileSelector))
        ).pipe(
            map(([currentUser, userProfile]: [ CurrentUser | null, UserProfile | null ]) => {
                    return currentUser.username === userProfile.username
                }
            )
        )
    }

    initializeListeners() {
        this.userProfileSubscription = this.store.pipe(select(userProfileSelector), filter((Boolean)))
            .subscribe((userProfile) => {
                this.userProfile = userProfile;
            })
    }

    fetchData(): void {
        this.store.dispatch(getUserProfileAction({ slug: this.slug }));
    }

    ngOnDestroy(): void {
        this.userProfileSubscription.unsubscribe();
    }
}
