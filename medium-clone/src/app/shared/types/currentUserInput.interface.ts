import { CurrentUser } from "./currentUser.interface";

export interface CurrentUserInput  extends CurrentUser {
    password: string;
}