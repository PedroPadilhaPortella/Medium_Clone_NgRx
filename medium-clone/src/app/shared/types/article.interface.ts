import { PopularTag } from 'src/app/popular-tags/types/popularTag.type';
import { Profile } from "../../feed/types/author.interface";

export interface Article {
    title: string;
    slug: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    tagList: PopularTag[];
    description: string;
    author: Profile;
    favorited: boolean;
    favoritesCount: number;
}