import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit, 
                                              DoCheck, 
                                              AfterContentInit, 
                                              AfterContentChecked,
                                              AfterViewInit,
                                              AfterViewChecked,
                                              OnDestroy {

  product: Product;
  logs: string[];
  desired_amount: number = 0;
  amount_to_show: number = 0;
  product_data: string = 'Apple';

  constructor(private productService: ProductService) {
    this.product = this.productService.getProducts()[1];
    this.logs = [];
  }

  ngOnInit(): void {
    this.logs.push('OnInit'); 
  }

  ngDoCheck(): void {
    this.logs.push('DoCheck'); 
  }

  ngAfterContentInit(): void {
    this.logs.push('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logs.push('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logs.push('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logs.push('AfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logs.push('OnDestroy');
  }

  buyFruit() {
    this.amount_to_show = this.desired_amount;
    this.handleFruitName();
  }

  reset() {
    this.desired_amount = 0;
    this.amount_to_show = 0;
    this.handleFruitName();
  }

  handleFruitName() {
    if (this.amount_to_show != 0) {
      this.product_data = this.product.name + '(s)';
    } else {
      this.product_data = this.product.name;
    }
  }

}
