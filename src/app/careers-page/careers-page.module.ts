import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareersPageComponent } from './careers-page.component';

@NgModule({
  declarations: [
    CareersPageComponent,
  ],
  imports: [
    RouterModule.forChild([{
      path:'', component: CareersPageComponent
    }])
  ],
  exports: [RouterModule]
})
export class CareersPageModule {

}
