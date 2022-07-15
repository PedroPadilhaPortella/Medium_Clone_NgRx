import { BackendErrors } from './backendErrors.interface';
import { CurrentUser } from "src/app/shared/types/currentUser.interface";

export interface AuthState {
    currentUser: CurrentUser | null;
    isSubmitting: boolean;
    isLoggedIn: boolean | null;
    validationErrors: BackendErrors | null;
}