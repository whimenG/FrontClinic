import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDataDisplayComponent } from './test-data-display.component';

describe('TestDataDisplayComponent', () => {
  let component: TestDataDisplayComponent;
  let fixture: ComponentFixture<TestDataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDataDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
