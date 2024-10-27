import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-404',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './page-404.component.html',
  styleUrl: './page-404.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page404Component { }
