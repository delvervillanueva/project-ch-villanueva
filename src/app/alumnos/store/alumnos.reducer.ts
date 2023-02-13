import { Action, createReducer, on } from '@ngrx/store';
import * as AlumnosActions from './alumnos.actions';
import { ListaAlumnosModel } from '../../../app/interfaces/alumnos.model';


export const alumnosFeatureKey = 'alumnos';

export interface State {
  data: ListaAlumnosModel[];
  totalAlumnos: number;
}

export const initialState: State = {
  data:[],
  totalAlumnos:0,
}

export const reducer = createReducer(
  initialState,

  on(AlumnosActions.loadAlumnoss, state => state),
  on(AlumnosActions.loadAlumnossSuccess, (state, action) => {
    return {
      ...state,
      data: action.data,
      totalAlumnos: action.totalAlumnos,
    }
  }),
  on(AlumnosActions.loadAlumnossFailure, (state, action) => state),

);
