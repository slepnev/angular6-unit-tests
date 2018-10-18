import { HomeComponent } from './integration/home/home.component';
import { TodosComponent } from './integration/2-todos/todos.component';
import { UsersComponent } from './integration/users/users.component';
import { UserDetailsComponent } from './integration/3-user-details/user-details.component';

export const routes = [
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'todos', component: TodosComponent},
  {path: '', component: HomeComponent},
];
