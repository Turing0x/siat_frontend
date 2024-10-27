import { Consumption } from '@/interfaces/consumprion.interface';
import { ConsumptionService } from '@/services/consumption.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'electricity-consumption',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './electricity-consumption.component.html',
  styleUrl: './electricity-consumption.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElectricityConsumptionComponent implements OnInit {

  private cd = inject(ChangeDetectorRef);

  private consumptionService = inject(ConsumptionService);

  public consumptions: Consumption[] = [];

  ngOnInit(): void {
    this.consumptionService.getConsumptions().subscribe(consumptions => {
      this.consumptions = consumptions;
      this.cd.markForCheck();
    });
  }

  createNew(): void {
    // TODO: Implement create new consumption logic
    console.log('Create new consumption');
  }

  viewConsumption(id: number): void {
    // TODO: Implement view consumption logic
    console.log('View consumption with ID:', id);
  }

  editConsumption(id: number): void {
    // TODO: Implement edit consumption logic
    console.log('Edit consumption with ID:', id);
  }

  deleteConsumption(id: number): void {
    // TODO: Implement delete consumption logic
    console.log('Delete consumption with ID:', id);
    // For now, just filter out the deleted item
    this.consumptions = this.consumptions.filter(c => c.ID !== id);
  }
}
