import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiespolicyComponent } from './cookiespolicy.component';

describe('CookiespolicyComponent', () => {
  let component: CookiespolicyComponent;
  let fixture: ComponentFixture<CookiespolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiespolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiespolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
