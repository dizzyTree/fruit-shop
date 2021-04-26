import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { Product } from '../types';

@Component({
  selector: 'app-add-to-basket',
  templateUrl: './add-to-basket.component.html',
  styleUrls: ['./add-to-basket.component.scss']
})
export class AddToBasketComponent implements OnInit {
  @Input() basketProduct!: Product;
  quantity: number = 1;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    this.quantity--;
  }

  addToBasket(): void {
    this.basketService.addToBasket(this.basketProduct, this.quantity);
  }
}
