import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoComponent } from './components/todo/todo.component';
import { AboutComponent } from './components/about/about.component';
import { AddlistComponent } from './components/addlist/addlist.component';
import { ShowlistComponent } from './components/showlist/showlist.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CurrenttaskComponent } from './components/currenttask/currenttask.component';
import { Comp1Component } from './observables/components/comp1/comp1.component';
import { Comp2Component } from './observables/components/comp2/comp2.component';

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
