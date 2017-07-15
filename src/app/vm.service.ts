import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class VMService {
  constructor (
    private http: Http
  ) {}

  getVms() {
    return this.http.get(`http://192.168.0.165:3000/vms/info`)
    .map((res:Response) => res.json());
  }
  pollTasks() {
     return Observable.interval(5000).switchMap(() => this.http.get('http://192.168.0.165:3000/vms/info')).map((res:Response)  => res.json())
    }


}
