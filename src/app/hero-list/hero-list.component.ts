import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes:any = [];
  name: string ='';
  constructor() { }

  ngOnInit() {
    this.heroes = [
      new Hero(1,"Hero1"),
      new Hero(2,"Hero2"),
      new Hero(3,"Hero3"),
      new Hero(4,"Hero4")
    ];
  }

  addHero(): void{
    this.heroes.push(new Hero(5, this.name));
  }

}