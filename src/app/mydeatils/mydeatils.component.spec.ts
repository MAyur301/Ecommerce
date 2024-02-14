import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydeatilsComponent } from './mydeatils.component';

describe('MydeatilsComponent', () => {
  let component: MydeatilsComponent;
  let fixture: ComponentFixture<MydeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
