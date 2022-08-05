import { CurrentUser } from "src/app/shared/types/currentUser.interface";
import { BaseState } from 'src/app/shared/types/state.interface';

export interface AuthState extends BaseState {
    currentUser: CurrentUser | null;
    isLoading: boolean;
    isLoggedIn: boolean | null;
}