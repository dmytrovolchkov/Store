import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormModule } from './../form/form.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [
    ItemComponent,
  ],
  imports: [
    RouterModule.forChild([{
      path:'', component: ItemComponent
    }]),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FlexLayoutModule,
    FormModule,
    FormsModule,
  ],
  exports: [RouterModule]
})
export class ItemModule {

}
