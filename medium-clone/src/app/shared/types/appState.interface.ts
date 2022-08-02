import { PopularTagsState } from './../../popular-tags/types/popularTagsState.interface';
import { AuthState } from "src/app/auth/types/authState.interface";
import { FeedState } from './../../feed/types/feedState.interface';
import { ArticleState } from 'src/app/article/types/articleState.interface';

export interface AppState {
    auth: AuthState;
    feed: FeedState;
    article: ArticleState;
    popularTags: PopularTagsState;
} 