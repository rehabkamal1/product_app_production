
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private cartItems = new BehaviorSubject<any[]>([]);
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable(); 

  setCartItem(item: any) {
    const currentItems = this.cartItems.value;

    const existingItem = currentItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentItems.push({ ...item, quantity: 1 });
    }

    this.cartItems.next([...currentItems]); 
    this.updateCartCount();  
  }

  getCartItems(): Observable<any[]> {
    return this.cartItems.asObservable();
  }

  updateCart(updatedItems: any[]) {
    this.cartItems.next([...updatedItems]);
    this.updateCartCount();
  }

  private updateCartCount() {
    const totalCount = this.cartItems.value.reduce((total, item) => total + item.quantity, 0);
    this.cartCount.next(totalCount); 
  }
}
