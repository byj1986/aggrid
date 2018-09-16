import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticomboboxComponent } from './multicombobox.component';

describe('MulticomboboxComponent', () => {
  let component: MulticomboboxComponent;
  let fixture: ComponentFixture<MulticomboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticomboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticomboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
