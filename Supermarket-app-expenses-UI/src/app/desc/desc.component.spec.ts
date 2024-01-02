import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescComponent } from './desc.component';

describe('DescComponent', () => {
  let component: DescComponent;
  let fixture: ComponentFixture<DescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescComponent]
    });
    fixture = TestBed.createComponent(DescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
