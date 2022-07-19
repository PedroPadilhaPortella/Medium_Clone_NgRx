import { Article } from "./article.interface";

export interface FeedResponse {
    article: Article[];
    articlesCount: number;
}