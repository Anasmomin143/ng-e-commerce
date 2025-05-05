import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  constructor(
  ) {

   }

  ngOnInit(): void {
    // You can add any initialization logic here if needed
  }

  // Add any methods or properties you need for this component
}
