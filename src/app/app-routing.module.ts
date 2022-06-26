import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TodoComponent } from './todo-tasks/todo/todo.component';
import { AboutComponent } from './todo-tasks/about/about.component';
import { AddlistComponent } from './todo-tasks/addlist/addlist.component';
import { LoginComponent } from './components/login/login.component';
import { CurrenttaskComponent } from './todo-tasks/currenttask/currenttask.component';

const routes: Routes = [
  {path:'todotasks',loadChildren:()=>import('./todo-tasks/todo-tasks.module').then(rot=>rot.TodoTasksModule)},
  { path: "login", component: LoginComponent },
  { path: "", component: TodoComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
