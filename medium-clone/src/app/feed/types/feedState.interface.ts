import { FeedResponse } from "./feedResponse.interface";

export interface FeedState {
    isLoading: boolean;
    error: string | null;
    data: FeedResponse | null;
}