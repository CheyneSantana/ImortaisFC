import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaImortaisComponent } from './agenda-imortais.component';

describe('AgendaImortaisComponent', () => {
  let component: AgendaImortaisComponent;
  let fixture: ComponentFixture<AgendaImortaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaImortaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaImortaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
