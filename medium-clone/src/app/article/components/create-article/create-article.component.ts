import { createArticleAction } from './../../store/actions/createArticle.action';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrors } from 'src/app/auth/types/backendErrors.interface';
import { ArticleInput } from './../../../shared/types/articleInput.interface';
import { isSubmittingSelector, validationErrorsSelector } from './../../store/selectors/createArticleSelector';

@Component({
    selector: 'mc-create-article',
    templateUrl: './create-article.component.html',
    styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
    initialValues: ArticleInput = {
        title: '',
        description: '',
        body: '',
        tagList: [],
    }

    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrors | null>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    onSubmit(articleInput: ArticleInput) {
        this.store.dispatch(createArticleAction({ article: articleInput}));
    }

}
