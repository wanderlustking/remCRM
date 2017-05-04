import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemUserListComponent } from './rem-user-list.component';

describe('RemUserListComponent', () => {
  let component: RemUserListComponent;
  let fixture: ComponentFixture<RemUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
