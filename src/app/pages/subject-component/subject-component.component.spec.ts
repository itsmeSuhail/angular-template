import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectComponentComponent } from './subject-component.component';

describe('SubjectComponentComponent', () => {
  let component: SubjectComponentComponent;
  let fixture: ComponentFixture<SubjectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
