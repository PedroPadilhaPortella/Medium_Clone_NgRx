import { PopularTag } from './popularTag.type';

export interface PopularTagsState {
    data: PopularTag[] | null;
    isLoading: boolean;
    error: string | null;
}