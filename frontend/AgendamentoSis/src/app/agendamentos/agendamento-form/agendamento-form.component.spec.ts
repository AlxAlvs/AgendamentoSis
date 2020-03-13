import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoFormComponent } from './agendamento-form.component';

describe('AgendamentoFormComponent', () => {
  let component: AgendamentoFormComponent;
  let fixture: ComponentFixture<AgendamentoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendamentoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
