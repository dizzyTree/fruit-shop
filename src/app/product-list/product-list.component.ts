import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnChanges, 
                                              OnInit, 
                                              DoCheck, 
                                              AfterContentInit, 
                                              AfterContentChecked,
                                              AfterViewInit,
                                              AfterViewChecked,
                                              OnDestroy {

  products: Product[];
  logs: string[];

  constructor(private productService: ProductService) {
    this.products = [];
    this.products = this.products.concat(this.productService.getProducts()[1]);
    this.logs = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logs.push('OnChanges');
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

  buyFruit(element: any) {
    element.textContent = `Bought!`;
    element.disabled = true;
  }

}
