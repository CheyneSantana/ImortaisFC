import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacaoInicialComponent } from './animacao-inicial.component';

describe('AnimacaoInicialComponent', () => {
  let component: AnimacaoInicialComponent;
  let fixture: ComponentFixture<AnimacaoInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacaoInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacaoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
