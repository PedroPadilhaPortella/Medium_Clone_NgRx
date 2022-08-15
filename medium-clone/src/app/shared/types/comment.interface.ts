import { Profile } from "src/app/feed/types/author.interface";

export interface Comment {
    id: number;
    body: string;
    author: Profile;
    createdAt: Date;
    updatedAt: Date;
}