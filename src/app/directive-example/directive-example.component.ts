import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  heroes: any =[];
  constructor() { }

  ngOnInit() {
    this.heroes = [
      new Hero(1,"Hero1"),
      new Hero(2,"Hero2"),
      new Hero(3,"Hero3"),
      new Hero(4,"Hero4")
    ];
  }

}