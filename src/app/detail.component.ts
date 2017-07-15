import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {single, multi} from './data';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';

import { VMService } from './vm.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent  {
  id: string;
  items:any[];
  private sub: any;

}
