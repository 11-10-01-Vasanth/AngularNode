import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsingleproductComponent } from './getsingleproduct.component';

describe('GetsingleproductComponent', () => {
  let component: GetsingleproductComponent;
  let fixture: ComponentFixture<GetsingleproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetsingleproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetsingleproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
