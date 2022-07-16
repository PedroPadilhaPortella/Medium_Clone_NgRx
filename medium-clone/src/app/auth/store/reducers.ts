import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from './actions/getCurrentUser.action';
import { loginAction, loginSuccessAction, loginFailureAction } from './actions/login.action';
import { Action, createReducer, on } from "@ngrx/store";
import { AuthState } from "../types/authState.interface";
import { registerAction, registerSuccessAction, registerFailureAction } from "./actions/register.action";

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
);

export function reducers(state: AuthState, action: Action) {
    return authReducer(state, action);
}