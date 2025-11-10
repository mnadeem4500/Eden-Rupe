import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesliderComponent } from './siteslider.component';

describe('SitesliderComponent', () => {
  let component: SitesliderComponent;
  let fixture: ComponentFixture<SitesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitesliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
