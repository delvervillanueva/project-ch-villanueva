import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosEffects } from './store/alumnos.effects';
import { StoreModule } from '@ngrx/store';
import { alumnosFeatureKey, reducer } from './store/alumnos.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(alumnosFeatureKey,reducer ),
    EffectsModule.forFeature([AlumnosEffects])
  ]
})
export class AlumnosStoreModule { }
