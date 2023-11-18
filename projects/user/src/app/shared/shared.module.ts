import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule} from '@ngx-translate/core';
import { ProductComponent } from './components/product/product.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SelectComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend:true
    }),
    ReactiveFormsModule,
    FormsModule,
    RouterModule

  ],
  exports:[
    TranslateModule,
    SelectComponent,
    ProductComponent
  ]
})
export class SharedModule { }
