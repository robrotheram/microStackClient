import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { DetailComponent } from './detail.component';

import { VMUsageComponent } from './vmusage.component';
import { VMConsoleComponent } from './vmconsole.component';
import { VMHistoryComponent } from './vmhistory.component';
import { VMSettingsComponent } from './vmsettings.component';
import { VMCreateComponent } from './vmcreate.component';

export const router: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: AboutComponent },
    { path: 'create', component: VMCreateComponent },
    //{ path: 'detail', component: DetailComponent },
    {
    path: 'vm/:vmId',
    component: DetailComponent,
    children: [
      {path: '', redirectTo: 'usage',pathMatch: 'full'},
      {path: 'usage', component: VMUsageComponent}, 
      {path: 'console', component: VMConsoleComponent}, 
      {path: 'history', component: VMHistoryComponent}, 
      {path: 'settings', component: VMSettingsComponent}, 
    ]
  },
  {path: '**', component: AboutComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);