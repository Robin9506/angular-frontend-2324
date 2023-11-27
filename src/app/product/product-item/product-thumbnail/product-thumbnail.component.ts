import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-thumbnail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-thumbnail.component.html',
  styleUrl: './product-thumbnail.component.scss'
})
export class ProductThumbnailComponent {
  @Input() thumbnail: string | undefined = "";
}
