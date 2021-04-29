import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
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

  id: number = 0;
  
  constructor(private productService: ProductService) {
    this.bought_amount = 0;
    this.bought_product = '';
    this.logs = [];
    this.product = this.productService.getProducts()[1];
  }

  ngOnChanges(): void {
    this.id++;
    this.logs.push(`#${this.id} OnChanges`);
  }

  ngOnInit(): void {
    this.id++;
    this.logs.push(`#${this.id} OnInit`); 
  }

  ngOnDestroy(): void {
    this.message.emit('destroing child component ...');
  }

}
