import { CurrentUser } from './../../../shared/types/currentUser.interface';
import { currentUserSelector } from '../../../auth/store/selectors/authSelector';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription, Observable, combineLatest, map } from 'rxjs';
import { isLoadingSelector, errorSelector } from '../../store/selectors/getArticleSelector';
import { Article } from './../../../shared/types/article.interface';
import { getArticleAction } from '../../store/actions/getArticle.action';
import { articleSelector } from '../../store/selectors/getArticleSelector';
import { deleteArticleAction } from '../../store/actions/deleteArticle.action';

@Component({
    selector: 'mc-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {

    slug: string;
    article: Article;
    articleSub: Subscription;
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    isAuthor$: Observable<boolean>;

    constructor(
        private store: Store,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.initializeValues();
        this.initializeListeners();
        this.fetchData();
    }

    initializeValues(): void {
        this.slug = this.route.snapshot.paramMap.get('slug');
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector));

        this.isAuthor$ = combineLatest(
            this.store.pipe(select(articleSelector)),
            this.store.pipe(select(currentUserSelector))
        ).pipe(
            map(([article, currentUser]: [Article | null, CurrentUser | null]) => {
                if (!article || !currentUser) {
                    return false;
                }
                return article.author.username === currentUser.username;
            })
        )
    }

    initializeListeners(): void {
        this.articleSub = this.store.pipe(select(articleSelector))
            .subscribe((article: Article | null) => {
                this.article = article;
            });
    }

    fetchData(): void {
        this.store.dispatch(getArticleAction({ slug: this.slug }));
    }

    deleteArticle(): void {
        this.store.dispatch(deleteArticleAction({ slug: this.slug }))
    }

    ngOnDestroy(): void {
        this.articleSub.unsubscribe();
    }
}
