import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  {

    path:'',
    component:LayoutComponent,

    children: [
      {
        path:'products',
        component:AllProductsComponent
      },
      {path:'cart' , component:CartComponent},
      {path:"**" , redirectTo:"cart" , pathMatch:"full"}
   //   {
    //    path:'users',
      //loadChildren: () => import(`./manage-users/manage-users.module`).then(m => m.ManageUsersModule)
    //  },
   ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
