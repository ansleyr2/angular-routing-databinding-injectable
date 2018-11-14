import { Component, OnInit } from '@angular/core';
import { AppService } from '../service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[AppService]
})
export class UserListComponent implements OnInit {
  users: any = [];
  showchild: boolean = false;
  first_name: string = '';
  last_name: string = '';
  avatar: string = '';
  nameFromChild: string = '';
  constructor(private appService:AppService) { }

  ngOnInit() {
    this.showchild = false;
    this.appService.getData().subscribe(data =>{
      console.log(JSON.parse(data._body).data);
      this.users = JSON.parse(data._body).data;
    }, err=>{
      // new Error(err);
      console.log(err);
    });
  }

  showUser(user: any){
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.avatar = user.avatar;
    this.showchild = true;

  }

  showViewedInfo(data: string){
    console.log(data);
    this.nameFromChild = data;
  }


}