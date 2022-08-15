import { createAction, props } from '@ngrx/store';
import { Comment } from 'src/app/shared/types/comment.interface';
import { CommentInput } from 'src/app/shared/types/commentInput.interface';
import { ActionTypes } from '../actionTypes';
import { BackendErrors } from './../../../shared/types/backendErrors.interface';

export const createCommentAction = createAction(
    ActionTypes.CREATE_COMMENT,
    props<{ slug: string, commentInput: CommentInput }>()
);

export const createCommentSuccessAction = createAction(
    ActionTypes.CREATE_COMMENT_SUCCESS,
    props<{ comment: Comment }>()
    );
    
    export const createCommentFailureAction = createAction(
        ActionTypes.CREATE_COMMENT_FAILURE,
        props<{ errors: BackendErrors }>()
);