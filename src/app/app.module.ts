import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { SwitchComponent } from 'angular2-bootstrap-switch/components';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

import { AppComponent }  from './app.component';
import { AboutComponent }  from './about.component';
import { NavComponent }  from './nav.component';
import { DetailComponent }  from './detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { VMUsageComponent } from './vmusage.component';
import { VMConsoleComponent } from './vmconsole.component';
import { VMHistoryComponent } from './vmhistory.component';
import { VMSettingsComponent } from './vmsettings.component';
import { VMCreateComponent } from './vmcreate.component';

import { VMService } from './vm.service';

import { VMComponent }  from './vm.component';
import { routes } from './app.router';

@NgModule({
  imports:      [NgbModule.forRoot(), HttpModule, FormsModule, BrowserModule, BrowserAnimationsModule, NgxChartsModule, routes ],
  declarations: [
    AppComponent,
    SwitchComponent,
    NavComponent,
    VMComponent,
    AboutComponent,
    DetailComponent,
    VMUsageComponent,
    VMConsoleComponent,
    VMHistoryComponent,
    VMCreateComponent,
    VMSettingsComponent
    ],
  providers:[DatePipe, VMService, ],
  bootstrap:    [ AppComponent ],
  exports:      [NgxChartsModule]
})
export class AppModule { }
