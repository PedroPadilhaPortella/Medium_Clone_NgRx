export interface CurrentUser {
    id: number;
    email:string;
    username: string;
    createdAt: string;
    updatedAt: string;
    bio: string | null;
    image: string | null;
    token: string;
}