import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { EMPTY, from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from this services', () => {
    const todos = [
      {id: 1, title: 'a'},
      {id: 2, title: 'b'},
      {id: 3, title: 'c'}
    ];
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes when a new', () => {
    const spy = spyOn(service, 'add').and.callFake(t => {
      return EMPTY;
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server', () => {
    const todo = { id: 1};
    const spy = spyOn(service, 'add').and.returnValue(from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan();
  });
});
