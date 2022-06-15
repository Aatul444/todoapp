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

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    NavbarComponent,
    TodoComponent,
    AboutComponent,
    AddlistComponent,
    ShowlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
