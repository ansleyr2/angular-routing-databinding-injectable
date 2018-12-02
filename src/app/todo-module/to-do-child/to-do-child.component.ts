import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-child',
  templateUrl: './to-do-child.component.html',
  styleUrls: ['./to-do-child.component.css']
})

export class ToDoChildComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Output() todo = new EventEmitter<any>();
  //@Output() childCloser = new EventEmitter<any>();
  @Input() buttonText: string = 'Create';
  constructor() { }

  ngOnInit() {
  }
  createTodo(){
    if(this.buttonText === 'Create'){
      let todo = {
        "id": new Date().getUTCMilliseconds(),
        "title": this.title,
        "description":this.description
      }
      this.todo.emit(todo);
    }else{
      // Edit logic
    }
    
    //this.childCloser.emit('close');
  }
  getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  generate() {
        return this.getRandomInt(1, 100);
  }
}