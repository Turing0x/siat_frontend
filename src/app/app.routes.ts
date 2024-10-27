import { Routes } from '@angular/router';

import { WorkersListComponent } from './pages/workers-list/workers-list.component';
import { ElectricityConsumptionComponent } from './pages/electricity-consumption/electricity-consumption.component';
import { Page404Component } from './pages/page-404/page-404.component';

export const routes: Routes = [
  {
    path: 'workers',
    component: WorkersListComponent,
  },
  {
    path: 'electricity-consumption',
    component: ElectricityConsumptionComponent,
  },
  {
    path: '',
    redirectTo: 'electricity-consumption',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component
  },
];
