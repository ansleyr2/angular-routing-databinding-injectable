import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ToDoRoutingModule } from './todo-routing.module'
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoChildComponent } from './to-do-child/to-do-child.component';
console.log("to-do module loaded...");
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToDoRoutingModule,
  ],
  declarations: [
    ToDoComponent,
    ToDoChildComponent,
  ]
})
export class TodoModule { }