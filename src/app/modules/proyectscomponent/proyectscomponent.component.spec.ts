import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectscomponentComponent } from './proyectscomponent.component';

describe('ProyectscomponentComponent', () => {
  let component: ProyectscomponentComponent;
  let fixture: ComponentFixture<ProyectscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
