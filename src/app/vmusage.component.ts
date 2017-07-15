import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';
import { DatePipe } from '@angular/common';
import { VMService } from './vm.service';

@Component({
  selector: 'vmusage',
  templateUrl: './vmusage.component.html',
    styleUrls: ['./vm.component.css'],
})
export class VMUsageComponent implements OnInit, OnDestroy {
  id: string;
  items:any[];
  item:any;
  state:string;

  private sub: any;
  private subcription: any;

  constructor(private route: ActivatedRoute, private userService: VMService, private datePipe:DatePipe ) {
    this.sub = this.route.parent.params.subscribe(params => {this.id = params['vmId'];  console.log(params); });
    for (var _i = 0; _i < 30; _i++) {
      this.multi[0].series.unshift({"name":(
        this.datePipe.transform(Date.now()-(30-(_i*1000)), 'HH:mm:ss')
      ) , "value":0});
      this.multiMemory[0].series.unshift({"name":(
        this.datePipe.transform(Date.now()-(30-(_i*1000)), 'HH:mm:ss')
      ) , "value":0});

      console.log( this.datePipe.transform(Date.now()-(30-(_i*1000)), 'HH:mm:ss'))
    }
    console.log( this.datePipe.transform(Date.now()), 'HH:mm:ss');

  }
  add(x:any) {
    this.multi[0].series.unshift({"name":(
      this.datePipe.transform(Date.now(), 'hh:mm:ss')
    ) , "value":(x.Load)});
    this.multi[0].series.length = this.multi[0].series.length < 30 ? this.multi[0].series.length : 30;
    this.multi = [...this.multi]
  }

  addFreeMemory(x:any) {
    this.multiMemory[0].series.unshift({"name":(
      this.datePipe.transform(Date.now(), 'hh:mm:ss')
    ) , "value":(x.FreeMem/1024)});
    this.multiMemory[0].series.length = this.multiMemory[0].series.length < 30 ? this.multiMemory[0].series.length : 30;

    this.multiMemory[1].series.unshift({"name":(
      this.datePipe.transform(Date.now(), 'hh:mm:ss')
    ) , "value":(x.memory/1024)});
    this.multiMemory[1].series.length = this.multiMemory[1].series.length < 30 ? this.multiMemory[1].series.length : 30;

    this.multiMemory = [...this.multiMemory]
  }

  ngOnInit() {
    this.subcription = this.userService.pollTasks().subscribe(
      response => {
        this.items = response;
        this.item = this.items.filter(item => item.uuid == this.id)[0]
        this.state = this.item.state
        if(this.item.state == "RUNNING"){
          this.add(this.item)
          this.addFreeMemory(this.item)
          console.log(this.multi[0])
        }
      }
    );
  }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }


  single: any[];
  multi = [
  {
    "name": "Load",
    "series": [] as any[],
  }
];

multiMemory = [
  {
    "name": "FreeMemory",
    "series": [] as any[],
  },{
    "name": "MaxMemory",
    "series": [] as any[],
  }
];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Data (MB)';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = false;

  curve: any = shape.curveMonotoneX;

  onSelect(event:any) {
    console.log(event);
  }
}
