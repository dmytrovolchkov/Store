import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page.component';

@NgModule({
  declarations: [
    CartPageComponent,
  ],
  imports: [
    RouterModule.forChild([{
      path:'', component: CartPageComponent
    }]),
    FlexLayoutModule,
    MatIconModule,
    CommonModule,
  ],
  exports: [RouterModule]
})
export class CartPageModule {

}
