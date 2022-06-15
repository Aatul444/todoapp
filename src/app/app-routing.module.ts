import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TodoComponent } from './components/todo/todo.component';
import { AboutComponent } from './components/about/about.component';
import { AddlistComponent } from './components/addlist/addlist.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},

  {path:"addlist", component:AddlistComponent},
  {path:"about", component:AboutComponent},
  {path:"todo", component:TodoComponent},
  {path:"", component:TodoComponent}, 
{path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
