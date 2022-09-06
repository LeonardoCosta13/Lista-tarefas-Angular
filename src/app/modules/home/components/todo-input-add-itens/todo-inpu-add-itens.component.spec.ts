import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInpuAddItensComponent } from './todo-inpu-add-itens.component';

describe('TodoInpuAddItensComponent', () => {
  let component: TodoInpuAddItensComponent;
  let fixture: ComponentFixture<TodoInpuAddItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInpuAddItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInpuAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
