import { Comment } from "src/app/shared/types/comment.interface";

export interface CommentState {
    isLoading: boolean;
    error: string | null;
    data: Comment[] | null;
}