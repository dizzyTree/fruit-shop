import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: "",  component: ProductListComponent, pathMatch: "full" },
  { path: "products", component: ProductListComponent },
  // Task 4.2: start

  // Task 4.2: end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
