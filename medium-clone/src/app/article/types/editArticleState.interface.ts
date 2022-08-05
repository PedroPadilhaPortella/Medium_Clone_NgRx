import { BackendErrors } from 'src/app/auth/types/backendErrors.interface';
import { Article } from 'src/app/shared/types/article.interface';

export interface EditArticleState {
    article: Article | null;
    isLoading: boolean;
    isSubmitting: boolean;
    validationErrors: BackendErrors | null;
}