import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPageComponent } from './formation-page.component';

describe('FormationPageComponent', () => {
  let component: FormationPageComponent;
  let fixture: ComponentFixture<FormationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationPageComponent]
    });
    fixture = TestBed.createComponent(FormationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
