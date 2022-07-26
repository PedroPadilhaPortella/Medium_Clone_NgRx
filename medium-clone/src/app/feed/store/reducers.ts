import { routerNavigationAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store";
import { FeedState } from './../types/feedState.interface';
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from './actions/getFeed';

const initialState: FeedState = {
    data: null,
    isLoading: false,
    error: null,
}

const feedReducer = createReducer(
    initialState, 
    on(getFeedAction, (state): FeedState => ({
        ...state,
        isLoading: true,
    })),
    on(getFeedSuccessAction, (state, action): FeedState => ({
        ...state,
        isLoading: false,
        data: action.feed
    })),
    on(getFeedFailureAction, (state): FeedState => ({
        ...state,
        isLoading: false,
    })),
    on(routerNavigationAction, (): FeedState => ({
        ...initialState
    })),
);

export function reducers(state: FeedState, action: Action) {
    return feedReducer(state, action);
}