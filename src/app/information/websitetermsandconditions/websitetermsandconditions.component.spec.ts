import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitetermsandconditionsComponent } from './websitetermsandconditions.component';

describe('WebsitetermsandconditionsComponent', () => {
  let component: WebsitetermsandconditionsComponent;
  let fixture: ComponentFixture<WebsitetermsandconditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitetermsandconditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitetermsandconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
