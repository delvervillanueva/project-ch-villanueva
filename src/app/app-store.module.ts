import { NgModule, isDevMode } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AlumnosStoreModule } from './alumnos/alumnos-store.module';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    AlumnosStoreModule
  ]
})
export class AppStoreModule { }
