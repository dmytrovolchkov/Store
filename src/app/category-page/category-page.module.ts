import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryPageComponent } from './category-page.component';
import { PaintComponent } from '../paint/paint.component';

@NgModule({
  declarations: [
    CategoryPageComponent,

  ],
  imports: [
    RouterModule.forChild([{
      path:'', component: CategoryPageComponent
    }]),
    FlexLayoutModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class CategoryPageModule {

}
