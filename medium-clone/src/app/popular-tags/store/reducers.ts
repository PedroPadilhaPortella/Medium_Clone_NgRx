import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from './actions/getPopularTags.action';
import { Action, createReducer, on } from '@ngrx/store';
import { PopularTagsState } from './../types/popularTagsState.interface';

const initialState: PopularTagsState = {
    data: null,
    isLoading: false,
    error: null,
}

const popularTagsReducer = createReducer(
    initialState, 
    on(getPopularTagsAction, (state): PopularTagsState => ({
        ...state,
        isLoading: true,
    })),
    on(getPopularTagsSuccessAction, (state, action): PopularTagsState => ({
        ...state,
        isLoading: false,
        data: action.popularTags
    })),
    on(getPopularTagsFailureAction, (state): PopularTagsState => ({
        ...state,
        isLoading: false,
    })),
);

export function reducers(state: PopularTagsState, action: Action) {
    return popularTagsReducer(state, action);
}