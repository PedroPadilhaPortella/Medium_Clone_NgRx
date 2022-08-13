import { Action, createReducer, on } from "@ngrx/store";
import { UserProfileState } from "../types/userProfileState.interface";
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from "./actions/getUserProfile.action";

const initialState: UserProfileState = {
    data: null,
    isLoading: false,
    error: null,
}

const userProfileReducer = createReducer(
    initialState, 
    on(getUserProfileAction, (state): UserProfileState => ({
        ...state,
        isLoading: true,
    })),
    on(getUserProfileSuccessAction, (state, action): UserProfileState => ({
        ...state,
        isLoading: false,
        data: action.userProfile
    })),
    on(getUserProfileFailureAction, (state): UserProfileState => ({
        ...state,
        isLoading: false,
    })),
);

export function userProfileReducers(state: UserProfileState, action: Action) {
    return userProfileReducer(state, action);
}