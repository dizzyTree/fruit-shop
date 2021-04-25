import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, HostListener, OnInit } from '@angular/core';
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
                                              AfterViewChecked {

  product: Product;
  logs: string[];

  desired_amount: number = 0;
  amount_to_show: number = 0;
  id: number = 0;

  product_data: string = 'Apple';
  regexStr: string = '^[1-9][0-9]*$';

  showChild = false;
 
  constructor(private productService: ProductService, private el: ElementRef) {
    this.product = this.productService.getProducts()[1];
    this.logs = [];
  }

  ngOnInit(): void {
    this.id++;
    this.logs.push(`#${this.id} OnInit`); 
  }

  ngDoCheck(): void {
    this.id++;
    this.logs.push(`#${this.id} DoCheck`); 
  }

  ngAfterContentInit(): void {
    this.id++;
    this.logs.push(`#${this.id} AfterContentInit`);
  }

  ngAfterContentChecked(): void {
    this.id++;
    this.logs.push(`#${this.id} AfterContentChecked`);
  }

  ngAfterViewInit(): void {
    this.id++;
    this.logs.push(`#${this.id} AfterViewInit`);
  }

  ngAfterViewChecked(): void {
    this.id++;
    this.logs.push(`#${this.id} AfterViewChecked`);
  }

  buyFruit() {
    this.amount_to_show = this.desired_amount;
    this.showChild = true;
    this.handleFruitName();
  }

  reset() {
    this.desired_amount = 0;
    this.amount_to_show = 0;
    this.handleFruitName();
    this.showChild = false;
  }

  listenToMessage(message: string) {
    this.logs.push(message);
  }

  handleFruitName() {
    if (this.amount_to_show != 0) {
      this.product_data = this.product.name + '(s)';
    } else {
      this.product_data = this.product.name;
    }
  }

  isDisabled(): boolean {
    return this.desired_amount === 0;
  }

  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    return new RegExp(this.regexStr).test(event.key);
  }

}
