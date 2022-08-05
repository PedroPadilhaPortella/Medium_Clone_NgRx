import { Article } from 'src/app/shared/types/article.interface';
import { BaseState } from 'src/app/shared/types/state.interface';

export interface EditArticleState extends BaseState {
    article: Article | null;
    isLoading: boolean;
}