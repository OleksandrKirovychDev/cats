import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatCardComponent {
  @Input() img: string = '';
}
