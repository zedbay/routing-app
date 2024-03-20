import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusterComponent } from './buster.component';

describe('BusterComponent', () => {
  let component: BusterComponent;
  let fixture: ComponentFixture<BusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
