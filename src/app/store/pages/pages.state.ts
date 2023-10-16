import { ErrorModel } from "src/app/shared/models/error.model";

export const pagesFeatureName = 'PAGES';

export interface PagesState {
    message?: string;
    error?: ErrorModel;
}

export const initialPagesState: PagesState = {
    message: undefined,
    error: undefined,
}