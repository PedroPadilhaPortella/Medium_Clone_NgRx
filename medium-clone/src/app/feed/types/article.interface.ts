import { Profile } from "./author.interface";

export interface Article {
    title: string;
    slug: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    tagList: string[];
    description: string;
    author: Profile;
    favorite: boolean;
    favoritesCount: number;
}