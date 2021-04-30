import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../types';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  private routeSub!: Subscription;

  id: number = 0;
  product!: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {            
    this.routeSub = this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });
    this.product = this.productService.getProduct(this.id);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
