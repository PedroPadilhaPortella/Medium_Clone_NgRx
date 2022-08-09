import { Article } from 'src/app/shared/types/article.interface';
import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const addFavoriteAction = createAction(
    ActionTypes.ADD_TO_FAVORITES,
    props<{ isFavorited: boolean, slug: string }>()
  );
  
  export const addFavoriteSuccessAction = createAction(
      ActionTypes.ADD_TO_FAVORITES_SUCCESS,
      props<{ article: Article }>()
  );
  
  export const addFavoriteFailureAction = createAction(
      ActionTypes.ADD_TO_FAVORITES_FAILURE,
  );