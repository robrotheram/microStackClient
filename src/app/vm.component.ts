import { Component, Input } from '@angular/core';

@Component({
  selector: 'vm',
  templateUrl: './vm.component.html',
    styleUrls: ['./vm.component.css'],
})
export class VMComponent  {
  @Input() data: any;
  }
