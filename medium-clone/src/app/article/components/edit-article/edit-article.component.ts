import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { BackendErrors } from 'src/app/shared/types/backendErrors.interface';
import { ArticleInput } from 'src/app/shared/types/articleInput.interface';
import { updateArticleAction } from '../../store/actions/updateArticle.action';
import { articleSelector, isLoadingSelector, isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/editArticleSelector';
import { Article } from './../../../shared/types/article.interface';
import { getArticleAction } from './../../store/actions/getArticle.action';

@Component({
    selector: 'mc-edit-article',
    templateUrl: './edit-article.component.html',
    styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
    initialValues$: Observable<ArticleInput>;
    isLoading$: Observable<boolean>;
    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrors | null>;
    slug: string;

    constructor(
        private store: Store,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.initializeValues();
        this.fetchData();
    }

    initializeValues(): void {
        this.slug = this.route.snapshot.paramMap.get('slug');
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
        this.initialValues$ = this.store.pipe(
            select(articleSelector),
            filter(Boolean),
            map((article: Article) => {
                return {
                    title: article.title,
                    description: article.description,
                    body: article.body,
                    tagList: article.tagList,
                }
            }),
        );
    }

    fetchData(): void {
        this.store.dispatch(getArticleAction({ slug: this.slug }))
    }

    onSubmit(articleInput: ArticleInput) {
        this.store.dispatch(updateArticleAction({ slug: this.slug, article: articleInput }));
    }
}
