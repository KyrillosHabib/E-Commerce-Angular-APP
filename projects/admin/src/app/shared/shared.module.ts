import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule} from '@ngx-translate/core';
import { SelectComponent } from './components/select/select.component';




@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend:true
    }),

  ],
  exports:[
    TranslateModule,
    SelectComponent
  ]
})
export class SharedModule { }
