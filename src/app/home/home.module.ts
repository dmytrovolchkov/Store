import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PaintComponent } from '../paint/paint.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PaintComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild([{
      path:'', component: HomeComponent
    }]),
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  exports: [RouterModule]
})
export class HomeModule {

}
