import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWindowComponent } from './ui-window.component';

describe('UiWindowComponent', () => {
  let component: UiWindowComponent;
  let fixture: ComponentFixture<UiWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
