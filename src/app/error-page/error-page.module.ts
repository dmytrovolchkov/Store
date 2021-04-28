import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page.component';

@NgModule({
  declarations: [
    ErrorPageComponent,
  ],
  imports: [
    RouterModule.forChild([{
      path:'', component: ErrorPageComponent
    }])
  ],
  exports: [RouterModule]
})
export class ErrorPageModule {

}
