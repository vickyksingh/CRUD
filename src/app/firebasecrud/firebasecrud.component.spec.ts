import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasecrudComponent } from './firebasecrud.component';

describe('FirebasecrudComponent', () => {
  let component: FirebasecrudComponent;
  let fixture: ComponentFixture<FirebasecrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebasecrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
