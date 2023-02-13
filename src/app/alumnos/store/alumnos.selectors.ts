import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnos from './alumnos.reducer';

export const selectAlumnosState = createFeatureSelector<fromAlumnos.State>(
  fromAlumnos.alumnosFeatureKey
);

export const selectAlumnosArray = createSelector(
  selectAlumnosState,
  (alumnosState) => alumnosState.data

);

export const selectTotalAlumnosNumber = createSelector(
  selectAlumnosState,
  (alumnosState) => alumnosState.totalAlumnos

);