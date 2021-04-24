import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types';

@Component({
  selector: 'app-bought-product',
  templateUrl: './bought-product.component.html',
  styleUrls: ['./bought-product.component.scss']
})

export class BoughtProductComponent implements OnInit,
                                                OnChanges,
                                                OnDestroy {

  @Input() bought_amount: number;
  @Input() bought_product: string;
  @Output() message = new EventEmitter<string>();

  logs: string[];
  product: Product;
  
  constructor(private productService: ProductService) {
    this.bought_amount = 0;
    this.bought_product = '';
    this.logs = [];
    this.product = this.productService.getProducts()[1];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logs.push('OnChanges');
  }

  ngOnInit(): void {
    this.logs.push('OnInit'); 
  }

  ngOnDestroy(): void {
    this.message.emit('destroing child component ...');
  }

}
