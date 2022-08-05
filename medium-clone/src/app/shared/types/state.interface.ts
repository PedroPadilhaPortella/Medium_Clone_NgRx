import { BackendErrors } from "./backendErrors.interface";

export interface BaseState {
    isSubmitting: boolean;
    validationErrors: BackendErrors | null;
}