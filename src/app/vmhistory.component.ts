import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { VMService } from './vm.service';
import { ActivatedRoute } from '@angular/router';

import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'vmhistory',
  templateUrl: './vmhistory.component.html',
    styleUrls: ['./vm.component.css'],
})
export class VMHistoryComponent implements OnInit {
  id: string;
  items:any[];
  item:any;
  private sub: any;
  private subcription: any;


http: Http;

    constructor(http: Http, private route: ActivatedRoute, private datePipe:DatePipe) {
        this.sub = this.route.parent.params.subscribe(params => {this.id = params['vmId'];  console.log(params); });
        this.http = http;
    }


    convertDate(date:number){
       return this.datePipe.transform((date*1000), 'dd-MM-yyyy HH:mm:ss')
    }
 ngOnInit() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(
            'http://192.168.0.165:3000/vms/audit',
            JSON.stringify({uuid:this.id}),
            {headers:headers}
        ).map(
            (res: Response) => res.json()
        ).subscribe(
             data => this.items = data,
              err => console.log("ERROR:",err),
              () => console.log('Complete')
        );

    }
}
