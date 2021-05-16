import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: "",  component: ProductListComponent, pathMatch: "full" },
  { path: "products", component: ProductListComponent },
  // Task 3.2: start
  { path: "product/:id", component: ProductDetailPageComponent}
  // Task 3.2: end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
