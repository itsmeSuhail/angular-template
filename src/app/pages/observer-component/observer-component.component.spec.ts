import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverComponentComponent } from './observer-component.component';

describe('ObserverComponentComponent', () => {
  let component: ObserverComponentComponent;
  let fixture: ComponentFixture<ObserverComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserverComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObserverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
