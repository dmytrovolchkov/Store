import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog-page.component';
import { PhonePipePipe } from '../pipes/phone-pipe.pipe';

@NgModule({
  declarations: [
    BlogPageComponent,
    PhonePipePipe,
  ],
  imports: [
    RouterModule.forChild([{
      path:'', component: BlogPageComponent
    }]),
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
  ],
  exports: [RouterModule]
})
export class BlogPageModule {

}
