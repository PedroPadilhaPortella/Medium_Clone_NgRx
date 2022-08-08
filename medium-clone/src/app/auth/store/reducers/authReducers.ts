import { Action, createReducer, on } from "@ngrx/store";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from '../actions/getCurrentUser.action';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { updateCurrentUserSuccessAction } from '../actions/updateCurrentUser.action';
import { AuthState } from './../../types/authState.interface';
import { logoutAction } from './../actions/logout.action';

const initialState: AuthState = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null,
}

const authReducer = createReducer(
    initialState, 
    on(registerAction, (state): AuthState => ({
        ...state,
        isSubmitting: true,
        validationErrors: null,
    })),
    on(registerSuccessAction, (state, action): AuthState => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
    })),
    on(registerFailureAction, (state, action): AuthState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors,
    })),

    on(loginAction, (state): AuthState => ({
        ...state,
        isSubmitting: true,
        validationErrors: null,
    })),
    on(loginSuccessAction, (state, action): AuthState => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
    })),
    on(loginFailureAction, (state, action): AuthState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors,
    })),

    on(getCurrentUserAction, (state): AuthState => ({
        ...state,
        isLoading: true,
    })),
    on(getCurrentUserSuccessAction, (state, action): AuthState => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
    })),
    on(getCurrentUserFailureAction, (state, action): AuthState => ({
        ...state,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null,
    })),

    on(updateCurrentUserSuccessAction, (state, action): AuthState => ({
        ...state,
        currentUser: action.currentUser,
    })),

    on(logoutAction, (state): AuthState => ({
        ...state,
        ...initialState,
        isLoggedIn: false,
    })),
);

export function authReducers(state: AuthState, action: Action) {
    return authReducer(state, action);
}