import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const logoutAction = createAction(
    ActionTypes.LOGOUT,
);