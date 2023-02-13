import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIzqComponent } from './menu-izq.component';

describe('MenuIzqComponent', () => {
  let component: MenuIzqComponent;
  let fixture: ComponentFixture<MenuIzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIzqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
