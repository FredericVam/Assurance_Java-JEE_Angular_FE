import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlersList } from './handlers-list';

describe('HandlersList', () => {
  let component: HandlersList;
  let fixture: ComponentFixture<HandlersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandlersList],
    }).compileComponents();

    fixture = TestBed.createComponent(HandlersList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
