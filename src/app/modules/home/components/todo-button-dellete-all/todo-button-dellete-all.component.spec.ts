import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonDelleteAllComponent } from './todo-button-dellete-all.component';

describe('TodoButtonDelleteAllComponent', () => {
  let component: TodoButtonDelleteAllComponent;
  let fixture: ComponentFixture<TodoButtonDelleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtonDelleteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoButtonDelleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
