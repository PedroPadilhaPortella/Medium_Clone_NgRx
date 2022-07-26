import { PopularTagsState } from './../../popular-tags/types/popularTagsState.interface';
import { AuthState } from "src/app/auth/types/authState.interface";
import { FeedState } from './../../feed/types/feedState.interface';

export interface AppState {
    auth: AuthState;
    feed: FeedState;
    popularTags: PopularTagsState;
} 