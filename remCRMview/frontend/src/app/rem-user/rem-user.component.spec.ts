import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemUserComponent } from './rem-user.component';

describe('RemUserComponent', () => {
  let component: RemUserComponent;
  let fixture: ComponentFixture<RemUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
