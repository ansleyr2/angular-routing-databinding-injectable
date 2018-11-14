import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-list-child',
  templateUrl: './user-list-child.component.html',
  styleUrls: ['./user-list-child.component.css']
})
export class UserListChildComponent implements OnInit {
  // @Input() first_name: string= '';
  private _name = '';
  @Input()
  set first_name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
 
  get first_name(): string { return this._name; }

  @Input() last_name: string = '';
  @Input() avatar: string = '';

  @Output() notifyToParent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  notifyAsViewedToParent(){
    this.notifyToParent.emit(this._name);
  }

}