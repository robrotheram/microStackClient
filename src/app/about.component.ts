import { Component, OnInit } from '@angular/core';
import { VMService } from './vm.service';
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent  implements OnInit{
items : any[];
 constructor(private userService: VMService) {}

 ngOnInit(){
     this.userService.getVms().subscribe(data => {
     for(var item in data){
       if(data[item].disks[0] != undefined){
          data[item].disks = (data[item].disks[0]["virtual-size"])/(1024*1024*1024)
       }
     }
     this.items = data;
     });
     this.userService.pollTasks().subscribe(data => {
     for(var item in data){
       if(data[item].disks[0] != undefined){
          data[item].disks = (data[item].disks[0]["virtual-size"])/(1024*1024*1024)
       }
     }
     this.items = data;
     });
  }

}
