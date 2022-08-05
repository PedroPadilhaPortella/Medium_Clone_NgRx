import { BackendErrors } from '../../../shared/types/backendErrors.interface';
import { Article } from 'src/app/shared/types/article.interface';
import { ArticleInput } from '../../../shared/types/articleInput.interface';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const updateArticleAction = createAction(
    ActionTypes.UPDATE_ARTICLE,
    props<{ slug: string, article: ArticleInput }>()
);

export const updateArticleSuccessAction = createAction(
    ActionTypes.UPDATE_ARTICLE_SUCCESS,
    props<{ article: Article }>()
);

export const updateArticleFailureAction = createAction(
    ActionTypes.UPDATE_ARTICLE_FAILURE,
    props<{ errors: BackendErrors }>()
);