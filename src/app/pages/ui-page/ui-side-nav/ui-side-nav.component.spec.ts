import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSideNavComponent } from './ui-side-nav.component';

describe('UiSideNavComponent', () => {
  let component: UiSideNavComponent;
  let fixture: ComponentFixture<UiSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
