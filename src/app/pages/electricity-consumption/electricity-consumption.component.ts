import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class ElectricityConsumptionComponent { }
