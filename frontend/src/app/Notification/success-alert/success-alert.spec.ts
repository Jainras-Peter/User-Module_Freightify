import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlert } from './success-alert';

describe('SuccessAlert', () => {
  let component: SuccessAlert;
  let fixture: ComponentFixture<SuccessAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
