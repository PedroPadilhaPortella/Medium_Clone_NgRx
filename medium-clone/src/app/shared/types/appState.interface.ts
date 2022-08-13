import { SettingsState } from './../../auth/types/settingsState.interface';
import { EditArticleState } from './../../article/types/editArticleState.interface';
import { PopularTagsState } from './../../popular-tags/types/popularTagsState.interface';
import { AuthState } from "src/app/auth/types/authState.interface";
import { FeedState } from './../../feed/types/feedState.interface';
import { ArticleState } from 'src/app/article/types/articleState.interface';
import { CreateArticleState } from 'src/app/article/types/createArticleState.interface';
import { UserProfileState } from 'src/app/user-profile/types/userProfileState.interface';

export interface AppState {
    auth: AuthState;
    feed: FeedState;
    settings: SettingsState;
    article: ArticleState;
    createArticle: CreateArticleState;
    editArticle: EditArticleState;
    popularTags: PopularTagsState;
    userProfile: UserProfileState;
} 