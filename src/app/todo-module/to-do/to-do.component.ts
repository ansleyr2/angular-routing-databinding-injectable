import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  showAddTodo: boolean = false;
  todoList: any[] = [];
  title: string = '';
  desc:string = '';
  buttonText: string ='';
  constructor() { }

  ngOnInit() {
  }
  addTodo(){
    console.log('in');
    this.title ='';
    this.desc = '';
    this.buttonText = 'Create';
    this.showAddTodo = true;
  }
  addNewTodo(data){
    if(data){
      this.todoList.push(data);
      this.showAddTodo = false;
    }
  }
  hideAddToDo (){

  }
  editTodo(id){
    console.log(id);
    let todo = this.todoList.find((data)=>{
      return data.id === id;
    });
    console.log(todo);
    this.title = todo.title;
    this.desc = todo.description;
    this.buttonText = 'Save';
    this.showAddTodo = true;
  }


}