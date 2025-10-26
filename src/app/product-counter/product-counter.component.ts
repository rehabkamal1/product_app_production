import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-counter',
  templateUrl: './product-counter.component.html',
  imports: [CommonModule],
  styleUrls: ['./product-counter.component.css']
})
export class ProductCounterComponent  {
  cartItems: any[] = []; 

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.getCartItems().subscribe(items => {
      console.log('🚀 Cart Items:', items);
      if (items && Array.isArray(items)) {
        this.cartItems = items.map(item => ({
          ...item,
          quantity: item.quantity || 1 
        }));
      }
    });
  }

  increaseQuantity(item: any) {
    if (item.quantity < item.stock) { 
      item.quantity++;
      this.counterService.updateCart(this.cartItems);
    } else {
      alert(`❌ The maximum limit for the product "${item.title}" is ${item.stock}.`);
    }
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.counterService.updateCart(this.cartItems);
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.counterService.updateCart(this.cartItems);
    
    // this.cartItems.splice(index, 1);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
