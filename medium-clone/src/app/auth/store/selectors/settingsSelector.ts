import { SettingsState } from './../../types/settingsState.interface';
import { AppState } from "src/app/shared/types/appState.interface";
import { createSelector } from '@ngrx/store';

export const settingsFeatureSelector = (state: AppState): SettingsState => state.settings;

export const isSubmittingSelector = createSelector(
    settingsFeatureSelector,
    (settingsState: SettingsState) => settingsState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    settingsFeatureSelector,
    (settingsState: SettingsState) => settingsState.validationErrors
);