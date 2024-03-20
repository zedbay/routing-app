import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAComponent } from './first-a.component';

describe('FirstAComponent', () => {
  let component: FirstAComponent;
  let fixture: ComponentFixture<FirstAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
