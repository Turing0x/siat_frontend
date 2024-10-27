import { Routes } from '@angular/router';
import { WorkersListComponent } from './pages/workers-list/workers-list.component';
import { CreateWorkerComponent } from './pages/create-worker/create-worker.component';

export const routes: Routes = [
  {
    path: 'workers',
    component: WorkersListComponent,
  }
];
