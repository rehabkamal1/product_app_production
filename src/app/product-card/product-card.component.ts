import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterService } from '../services/counter.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() productItem: any;
  @Output() sendToParent = new EventEmitter<any>();

  router = inject(Router);
  counterService = inject(CounterService); 

  addToCart() {
    this.counterService.setCartItem(this.productItem);
    this.router.navigate(['/product-counter']); 
  }

  redirectToDetails() {
    this.router.navigate(['/product-details', this.productItem.id]);
  }
}
