import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsycComponent } from './asyc.component';
import { HttpClientModule } from '@angular/common/http';

describe('AsycComponent', () => {
  let component: AsycComponent;
  let fixture: ComponentFixture<AsycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsycComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
