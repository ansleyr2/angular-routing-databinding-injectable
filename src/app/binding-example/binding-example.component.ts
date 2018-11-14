import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html',
  styleUrls: ['./binding-example.component.css']
})
export class BindingExampleComponent implements OnInit {
  firstname: string = 'John Doe';
  favSport: string = '';
  constructor() { }

  ngOnInit() {
  }

  displayName(name: string): void{
    console.log("First name :"+ name);
  }

}