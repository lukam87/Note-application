import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesItemsComponent } from './notes-items.component';

describe('NotesItemsComponent', () => {
  let component: NotesItemsComponent;
  let fixture: ComponentFixture<NotesItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
