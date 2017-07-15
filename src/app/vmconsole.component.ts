import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { VMService } from './vm.service';
import { ActivatedRoute } from '@angular/router';

import {Http, Response, Headers} from '@angular/http';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Component({
  selector: 'vmconsole',
  templateUrl: './vmconsole.component.html',
  styleUrls: ['./vmconsole.component.css'],
})
export class VMConsoleComponent  {
  id: string;
  items:any[];
  item:any;
  private sub: any;
  private subcription: any;


http: Http;
url:SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer, http: Http, private route: ActivatedRoute, private datePipe:DatePipe) {
        this.sub = this.route.parent.params.subscribe(params => {this.id = params['vmId'];  console.log(params); });
        this.http = http;

        this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://192.168.0.165:3000/vms/"+this.id+"/vnc");
    }
}
