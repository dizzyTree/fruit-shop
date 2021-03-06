import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: "",  component: ProductListComponent, pathMatch: "full" },
  { path: "products", component: ProductListComponent },
  // TODO add route to ProductDetailPage with id parameter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
