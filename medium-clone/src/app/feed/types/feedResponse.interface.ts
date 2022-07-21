import { Article } from "./article.interface";

export interface FeedResponse {
    articles: Article[];
    articlesCount: number;
}