import { Action, createReducer, on } from "@ngrx/store";
import { updateCurrentUserAction } from '../actions/updateCurrentUser.action';
import { SettingsState } from './../../types/settingsState.interface';
import { updateCurrentUserFailureAction, updateCurrentUserSuccessAction } from './../actions/updateCurrentUser.action';

const initialState: SettingsState = {
    isSubmitting: false,
    validationErrors: null,
}

const settingsReducer = createReducer(
    initialState,
    on(updateCurrentUserAction, (state): SettingsState => ({
        ...state,
        isSubmitting: true,
    })),
    on(updateCurrentUserSuccessAction, (state): SettingsState => ({
        ...state,
        isSubmitting: false,
    })),
    on(updateCurrentUserFailureAction, (state, action): SettingsState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors,
    })),
);

export function settingsReducers(state: SettingsState, action: Action) {
    return settingsReducer(state, action);
}