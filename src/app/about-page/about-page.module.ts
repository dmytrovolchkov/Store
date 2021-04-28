import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page.component';

@NgModule({
  declarations: [
    AboutPageComponent,
  ],
  imports: [
    RouterModule.forChild([{
      path:'', component: AboutPageComponent
    }])
  ],
  exports: [RouterModule]
})
export class AboutPageModule {

}
