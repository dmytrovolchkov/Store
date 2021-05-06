import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ItemComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path:'', component: ItemComponent}
    ]),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [RouterModule]
})
export class ItemModule {

}
