import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { VMService } from './vm.service';
import { ActivatedRoute } from '@angular/router';

import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


interface VM {
         hostname:string,
         name:string,
         cores:number,
         memory:number,
         disk:string
     };

     
@Component({
  selector: 'vmcreate',
  templateUrl: './vmcreate.component.html',
})

export class VMCreateComponent implements OnInit {
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
        hostname: "vm name",
        name: "",
        cores: 1,
        memory: 1024,
        disk: "6G"
    }
    http: Http;
    private sub: any;
    private subcription: any;
    id:string;


    type = {
        tiny : {
            color:"",
            active:false,
            cores: 1,
            memory: 1024,
            disk: "4G"
            
        },
        small : {
            color:"",
            active:false,
            cores: 1,
            memory: 2048,
            disk: "10G"
            
        },
        medium : {
            color:"",
            active:false,
            cores: 2,
            memory: 4096,
            disk: "30G"
        },
        large : {
            color:"",
            active:false,
            cores: 4,
            memory: 8192,
            disk: "60G"
        }
    }

    constructor(http: Http, private route: ActivatedRoute, private userService: VMService, private datePipe:DatePipe ) {
        this.sub = this.route.parent.params.subscribe(params => {this.id = params['vmId'];  console.log(params); });
        this.http = http;
    }

    toggle(type: string) {
        //alert("to trhe moon")
        for(var t in this.type){
            if(t == type){
                this.type[t].color = "blue"
                this.type[t].active = true
                this.vm.cores = this.type[t].cores;
                this.vm.memory = this.type[t].memory;
                this.vm.disk = this.type[t].disk;
            } else {
                this.type[t].color = ""
                this.type[t].active = false
            }
        }
    }

    changeCores(amount:number){
        console.log("hello",this.vm.cores, amount)
        this.vm.cores= this.vm.cores+amount;
    }
     
    changeMemory(amount:number){
        console.log("hello",this.vm.memory, amount)
        this.vm.memory= this.vm.memory+amount;
    }

   
    create(){
        console.log(this.vm)
        var headers = new Headers();
        this.http.post(
            'http://192.168.0.165:3000/vms/create', 
            JSON.stringify(this.vm),
            {headers:headers}
        ).map(
            (res: Response) => res.json()
        ).subscribe(
             data => this.items = data,
              err => console.log("ERROR:",err),
              () => console.log('Complete')
        );
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



    edit(){
        console.log(this.vm);
    }

     ngOnInit() {

    }


}

