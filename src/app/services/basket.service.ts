import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../types';

export interface BasketItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket: { [id: number]: BasketItem } = {};
  private subject = new Subject<BasketItem[]>();

  constructor() { }

  onBasketChange() {
      return this.subject;
  }

  addToBasket(product: Product, quantity: number) {
    if (this.basket[product.id]) {
      this.basket[product.id].quantity += quantity;
    } else {
      this.basket[product.id] = {
        product: product,
        quantity: quantity
      }
    }
    this.subject.next(Object.values(this.basket));
  }
}
