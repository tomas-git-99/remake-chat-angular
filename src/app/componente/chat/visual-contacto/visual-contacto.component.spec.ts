import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualContactoComponent } from './visual-contacto.component';

describe('VisualContactoComponent', () => {
  let component: VisualContactoComponent;
  let fixture: ComponentFixture<VisualContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
