import { createAction, props } from '@ngrx/store';
import { CurrentUser } from '../../../shared/types/currentUser.interface';
import { BackendErrors } from '../../types/backendErrors.interface';
import { LoginRequest } from '../../types/loginRequest.interface';
import { ActionTypes } from '../actionTypes';

export const getCurrentUserAction = createAction(
  ActionTypes.GET_CURRENT_USER,
);

export const getCurrentUserSuccessAction = createAction(
    ActionTypes.GET_CURRENT_USER_SUCCESS,
    props<{ currentUser: CurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
    ActionTypes.GET_CURRENT_USER_FAILURE,
);