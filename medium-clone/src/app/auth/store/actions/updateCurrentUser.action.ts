import { BackendErrors } from 'src/app/shared/types/backendErrors.interface';
import { createAction, props } from "@ngrx/store";
import { CurrentUser } from "src/app/shared/types/currentUser.interface";
import { CurrentUserInput } from "src/app/shared/types/currentUserInput.interface";
import { ActionTypes } from "../actionTypes";

export const updateCurrentUserAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER,
    props<{ currentUser: CurrentUserInput }>()
);

export const updateCurrentUserSuccessAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
    props<{ currentUser: CurrentUser }>()
);

export const updateCurrentUserFailureAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER_FAILURE,
    props<{ errors: BackendErrors }>()
);