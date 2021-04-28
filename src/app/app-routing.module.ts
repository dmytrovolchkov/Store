import { ItemComponent } from './item/item.component';
import { FormComponent } from './form/form.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'form', component: FormComponent},
  {path: 'home/:id', component: ItemComponent},
  {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule'},
  {path: 'careers', loadChildren: './careers-page/careers-page.module#CareersPageModule'},
  {path: 'error', loadChildren: './error-page/error-page.module#ErrorPageModule'},
  {path: '**', redirectTo: '/error'},
]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
