import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    FormComponent,

  ],
  imports: [
    RouterModule.forChild([{
      path:'', component: FormComponent
    }]),
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    CommonModule

  ],
  exports: [RouterModule, FormComponent]
})
export class FormModule {

}
