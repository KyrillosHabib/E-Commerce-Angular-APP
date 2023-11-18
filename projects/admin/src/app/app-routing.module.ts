import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './dashboard/products/products.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes ,  { useHash: false }),ProductsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
