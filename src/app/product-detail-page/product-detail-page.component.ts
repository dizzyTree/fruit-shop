import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../types';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  product!: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {     
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProduct(id);
  }

  ngOnInit(): void {
  }
}
