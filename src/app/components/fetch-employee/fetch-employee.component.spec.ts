import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchEmployeeComponent } from './fetch-employee.component';

describe('FetchEmployeeComponent', () => {
  let component: FetchEmployeeComponent;
  let fixture: ComponentFixture<FetchEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchEmployeeComponent]
    });
    fixture = TestBed.createComponent(FetchEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
