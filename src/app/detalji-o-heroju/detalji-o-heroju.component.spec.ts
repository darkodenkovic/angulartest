import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiOHerojuComponent } from './detalji-o-heroju.component';

describe('DetaljiOHerojuComponent', () => {
  let component: DetaljiOHerojuComponent;
  let fixture: ComponentFixture<DetaljiOHerojuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiOHerojuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiOHerojuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
