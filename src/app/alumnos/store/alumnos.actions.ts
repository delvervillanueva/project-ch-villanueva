import { createAction, props } from '@ngrx/store';
import { ListaAlumnosModel } from 'src/app/interfaces/alumnos.model';

export const loadAlumnoss = createAction(
  '[Alumnos] Load Alumnoss',
  props<{page: number; per_page: number;}>()
);

export const loadAlumnossSuccess = createAction(
  '[Alumnos] Load Alumnoss Success',
  props<{ data: ListaAlumnosModel[], totalAlumnos: number; }>()
);

export const loadAlumnossFailure = createAction(
  '[Alumnos] Load Alumnoss Failure',
  props<{ error: any }>()
);
