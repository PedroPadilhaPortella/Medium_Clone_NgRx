import { BackendErrors } from '../../../shared/types/backendErrors.interface';
import { Article } from 'src/app/shared/types/article.interface';
import { ArticleInput } from './../../../shared/types/articleInput.interface';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const createArticleAction = createAction(
    ActionTypes.CREATE_ARTICLE,
    props<{ article: ArticleInput }>()
);

export const createArticleSuccessAction = createAction(
    ActionTypes.CREATE_ARTICLE_SUCCESS,
    props<{ article: Article }>()
);

export const createArticleFailureAction = createAction(
    ActionTypes.CREATE_ARTICLE_FAILURE,
    props<{ errors: BackendErrors }>()
);