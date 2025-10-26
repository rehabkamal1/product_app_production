import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsReqService } from '../services/products-req.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsReqService);
  product: any = null;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));

      if (productId) {
        this.productService.getProductDetails(productId).subscribe({
          next: (data) => {
            this.product = data;
          },
          error: (err) => {
            console.error("Error fetching product:", err);
          }
        });
      }
    });
  }

  addToCart() {
    this.router.navigate(['/product-counter']);
  }
}
