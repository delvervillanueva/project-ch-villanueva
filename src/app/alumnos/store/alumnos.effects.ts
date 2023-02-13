import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AlumnosActions from './alumnos.actions';
import { HttpClient } from '@angular/common/http';
import { ListaAlumnosModel } from 'src/app/interfaces/alumnos.model';


export interface AlumnoList {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        ListaAlumnosModel[];
}





@Injectable()
export class AlumnosEffects {

  loadAlumnoss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AlumnosActions.loadAlumnoss),
      concatMap((action) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getAlumnosApi(action.page, action.per_page).pipe(
          map(response => AlumnosActions.loadAlumnossSuccess({ data: response.data, totalAlumnos: response.total })),
          catchError(error => of(AlumnosActions.loadAlumnossFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  private getAlumnosApi(page: number, per_page: number): Observable<AlumnoList> { 
    return this.httpClient.get<AlumnoList>('https://reqres.in/api/users', {
      params: {
        page,
        per_page
      },
    });

  }
}
