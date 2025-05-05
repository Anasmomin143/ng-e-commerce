import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private as: ApiService) {}

  products: any = [];
  ngOnInit() {
    this.as.get('products').subscribe({
      next: (res) => {
        console.log(res.products);
        this.products = res.products;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Products fetched successfully');
      },
    });
  }
}
