import { AuthState } from "src/app/auth/types/authState.interface";
import { FeedState } from './../../feed/types/feedState.interface';

export interface AppState {
    auth: AuthState;
    feed: FeedState;
} 