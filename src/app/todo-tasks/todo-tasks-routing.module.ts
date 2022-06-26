import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { AboutComponent } from './about/about.component';
import { AddlistComponent } from './addlist/addlist.component';
import { CurrenttaskComponent } from './currenttask/currenttask.component';
import { ShowlistComponent } from './showlist/showlist.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'addlist',component:AddlistComponent},
  {path:'currenttask',component:CurrenttaskComponent},
  {path:'showlist',component:ShowlistComponent},
  {path:'todo',component:TodoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoTasksRoutingModule { }
