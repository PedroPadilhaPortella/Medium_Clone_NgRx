import { SettingsState } from './../../auth/types/settingsState.interface';
import { EditArticleState } from './../../article/types/editArticleState.interface';
import { PopularTagsState } from './../../popular-tags/types/popularTagsState.interface';
import { AuthState } from "src/app/auth/types/authState.interface";
import { FeedState } from './../../feed/types/feedState.interface';
import { ArticleState } from 'src/app/article/types/articleState.interface';
import { CreateArticleState } from 'src/app/article/types/createArticleState.interface';
import { UserProfileState } from 'src/app/user-profile/types/userProfileState.interface';
import { CommentState } from 'src/app/article/types/CommentState.interface';
import { CreateCommentState } from 'src/app/article/types/createCommentState.interface';

export interface AppState {
    auth: AuthState;
    feed: FeedState;
    settings: SettingsState;
    article: ArticleState;
    comment: CommentState;
    createArticle: CreateArticleState;
    createComment: CreateCommentState;
    editArticle: EditArticleState;
    popularTags: PopularTagsState;
    userProfile: UserProfileState;
} 