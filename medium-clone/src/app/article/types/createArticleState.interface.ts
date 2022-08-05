import { BackendErrors } from 'src/app/auth/types/backendErrors.interface';

export interface CreateArticleState {
    isSubmitting: boolean;
    validationErrors: BackendErrors | null;
}