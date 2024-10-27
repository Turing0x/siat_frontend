import { ValidatorService } from '@/services/validators.service';
import { WorkerService } from '@/services/worker.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'create-worker',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-worker.component.html',
  styleUrl: './create-worker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateWorkerComponent implements OnInit {

  private fb = inject(FormBuilder);
  private cd = inject(ChangeDetectorRef);

  private validatorService = inject(ValidatorService);
  private workerService = inject(WorkerService);
  
  public workerForm!: FormGroup;

  public entities: { ID: string, NOMBRE: string }[] = [];
  public departments: { ID: string, NOMBRE: string }[] = [];

  ngOnInit(): void {

    this.workerService.getAditionalData().subscribe(data => {
      this.entities = data[0];
      this.departments = data[1];
      this.cd.markForCheck();
    });

    this.workerForm = this.fb.group({
      name: new FormControl('Raul Garcia', Validators.required),
      phone: new FormControl('+5491134567890', Validators.required),
      email: new FormControl('raul.garcia@example.com', Validators.required),
      entity: new FormControl('123456', Validators.required),
      department: new FormControl('7890', Validators.required),
      charge: new FormControl('10', Validators.required),
    });
  }

  isValidField( field: string ): boolean | null {
    return this.validatorService.isValidField( this.workerForm, field );
  }

  onSubmit() {
    if (this.workerForm.invalid) {
      this.workerForm.markAllAsTouched();
      return;
    }

    this.workerService.saveWorker(this.workerForm.value).subscribe(response => {
      console.log(response);
    });
  }

}
