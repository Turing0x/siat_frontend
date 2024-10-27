import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CreateWorkerComponent } from '../create-worker/create-worker.component';
import { WorkerService } from '@/services/worker.service';
import { TWorker } from '@/interfaces/worker.interface';

@Component({
  selector: 'app-workers-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CreateWorkerComponent
  ],
  templateUrl: './workers-list.component.html',
  styleUrl: './workers-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkersListComponent implements OnInit {
  
  private cd = inject(ChangeDetectorRef);
  private workerService = inject(WorkerService);

  public workers: TWorker[] = [];
  public showCreateWorkerModal = false;
  
  ngOnInit(): void {
    this.workerService.getWorkers().subscribe(workers => {
      this.workers = workers;
      this.cd.detectChanges();
    });
  }

  openCreateWorkerModal() {
    this.showCreateWorkerModal = true;
  }

  closeCreateWorkerModal() {
    this.showCreateWorkerModal = false;
    this.cd.detectChanges();
  }

  deleteWorker(id: number) {
    this.workerService.deleteWorker(id).subscribe();
    this.cd.detectChanges();
  }

  updateWorker(worker: TWorker) {
    this.workerService.updateWorker(worker).subscribe(response => {
      this.cd.detectChanges();
    });
  }

}
