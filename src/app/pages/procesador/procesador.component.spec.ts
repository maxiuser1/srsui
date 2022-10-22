import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesadorComponent } from './procesador.component';

describe('ProcesadorComponent', () => {
  let component: ProcesadorComponent;
  let fixture: ComponentFixture<ProcesadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
