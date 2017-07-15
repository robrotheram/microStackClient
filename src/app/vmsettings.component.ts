import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { VMService } from './vm.service';
import { ActivatedRoute } from '@angular/router';

import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


interface VM {
        name:string,
         state:boolean,
         cores:number,
         memory:number,
         diskSize:number,
         filepath:string,
     };


@Component({
  selector: 'vmsettings',
  templateUrl: './vmsettings.component.html',
    styleUrls: ['./vmsettings.component.css'],
})
export class VMSettingsComponent implements OnInit {
    colors = ["blue", "default", "gray", "green", "red", "sky-blue", "yellow"];
    sizes = ["mini", "small", "normal", "large"];
    onText = "On";
    offText = "Off";
    onColor = "green";
    offColor = "red";
    size = "normal";
    disabled = false;
    items:any[];
    value:boolean = true;
    vm: VM = {
         name:"Test",
         state:false,
         cores:0 as number,
         memory:0,
         diskSize:0,
         filepath:"",
    };
    http: Http;
    private sub: any;
    private subcription: any;
    id:string;

    constructor(http: Http, private route: ActivatedRoute, private userService: VMService, private datePipe:DatePipe ) {
        this.sub = this.route.parent.params.subscribe(params => {this.id = params['vmId'];  console.log(params); });
        this.http = http;
    }

    changeCores(amount:number){
        console.log("hello",this.vm.cores, amount)
        this.vm.cores= this.vm.cores+amount;
    }

    changeMemory(amount:number){
        console.log("hello",this.vm.memory, amount)
        this.vm.memory= this.vm.memory+amount;
    }

    changeDisk(amount:number){
        console.log("hello",this.vm.diskSize, amount)
        this.vm.diskSize= this.vm.diskSize+amount;
    }
      onSubmitTemplateBased() {
        console.log(this.vm);
    }

    onFlagChange(){
        if(!this.vm.state){
            console.log("START");
            this.vmPower("start");
        }else{
            console.log("STOP");
            this.vmPower("stop");
        }
    }


    vmPower(state:string){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(
            'http://192.168.0.165:3000/vms/'+state,
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


    update(){
        console.log('Complete');
        var item = this.items.filter(item => item.uuid == this.id)[0]
        this.vm.name = item.hostname
        this.vm.cores = item.cores
        this.vm.memory = (item.memory/(1024))
        this.vm.diskSize = Math.round(item.disks[0]["actual-size"]/(1024*1024*1024))
        this.vm.filepath = item.disks[0].filename
        this.vm.state = item.state == "RUNNING"
    }

    edit(){
        console.log(this.vm);
    }

     ngOnInit() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.get('http://192.168.0.165:3000/vms/info').map((res:Response)  => res.json()).subscribe(
             data => this.items = data,
              err => console.log("ERROR:",err),
              () => this.update()
        );

    }


}
