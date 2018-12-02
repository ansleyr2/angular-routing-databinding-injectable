import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListChildComponent } from './user-list-child/user-list-child.component';
import { BindingExampleComponent } from './binding-example/binding-example.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';

import { MyComponentComponent } from './my-component/my-component.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'herolist', component: HeroListComponent },
  { path: 'userlist', component: UserListComponent },
  {path: 'bindingeg', component: BindingExampleComponent },
  {path: 'directiveeg', component: DirectiveExampleComponent },
  {
    path: 'todo',
    loadChildren: './todo-module/todo.module#TodoModule'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HomeComponent,
    UserListComponent,
    BindingExampleComponent,
    UserListChildComponent,
    CustomDirectiveDirective,
    DirectiveExampleComponent,
    MyComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [
    // Application injectors go here...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
