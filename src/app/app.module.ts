import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoComponent } from './todo-tasks/todo/todo.component';
import { AboutComponent } from './todo-tasks/about/about.component';
import { AddlistComponent } from './todo-tasks/addlist/addlist.component';
import { ShowlistComponent } from './todo-tasks/showlist/showlist.component';
import { LoginComponent } from './components/login/login.component';
import { Comp1Component } from './observables/components/comp1/comp1.component';
import { Comp2Component } from './observables/components/comp2/comp2.component';
import { CurrenttaskComponent } from './todo-tasks/currenttask/currenttask.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    NavbarComponent,
    TodoComponent,
    AboutComponent,
    AddlistComponent,
    ShowlistComponent,
    LoginComponent,
    CurrenttaskComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
