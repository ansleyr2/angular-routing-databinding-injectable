import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Http} from '@angular/http';

@Injectable()
export class AppService{
  constructor(private http: Http){

  }

  public getData(): Observable<any>{
    return this.http.get('https://reqres.in/api/users');
  }
}
