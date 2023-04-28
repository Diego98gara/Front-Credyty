import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosApiComponent } from './servicios-api.component';

describe('ServiciosApiComponent', () => {
  let component: ServiciosApiComponent;
  let fixture: ComponentFixture<ServiciosApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
