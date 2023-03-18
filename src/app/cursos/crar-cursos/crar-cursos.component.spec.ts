import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrarCursosComponent } from './crar-cursos.component';

describe('CrarCursosComponent', () => {
  let component: CrarCursosComponent;
  let fixture: ComponentFixture<CrarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrarCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
