import { Component, OnInit } from '@angular/core';
import { BasketItem, BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basketItems: BasketItem[] = [];

  constructor(private basketService: BasketService) {
    this.basketService.onBasketChange().subscribe(basketItems => {
      this.basketItems = basketItems;
    })
  }

  ngOnInit(): void {
  }

  calculateTotalQuantity(): number {
    let sum = 0;
    for (let item of this.basketItems) {
      sum += item.quantity;
    }
    return sum;
  }

}
