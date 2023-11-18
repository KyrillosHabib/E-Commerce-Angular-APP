import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ProductComponent } from '../shared/components/product/product.component';

const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children: [
    {
      path:'products',
      component:AllProductsComponent,
      //loadChildren: () => import(`./products/products.module`).then(m => m.ProductsModule)
    },
    {
      path:'cart',
      component:CartComponent
      //loadChildren: () => import(`./carts/carts.module`).then(m => m.CartsModule)
    },
    {path:"details/:id",component:ProductsDetailsComponent},
    {path:"**",redirectTo:"products",pathMatch:"full"},


  ]
}

 // {path:"details/:id",component:ProductsDetailsComponent},

 // {path:"**",redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes )],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
