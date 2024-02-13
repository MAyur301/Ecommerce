import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyoderComponent } from './myoder.component';

describe('MyoderComponent', () => {
  let component: MyoderComponent;
  let fixture: ComponentFixture<MyoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyoderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
