import { ItemComponent } from './item/item.component';
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule)},
  {path: 'cart', loadChildren: () => import('./cart-page/cart-page.module').then(m => m.CartPageModule)},
  {path: 'home/:id', component: ItemComponent},
  {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)},
  {path: 'careers', loadChildren: () => import('./careers-page/careers-page.module').then(m => m.CareersPageModule)},
  {path: 'error', loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPageModule)},
  {path: '**', redirectTo: '/error', pathMatch: 'full'},
]

@NgModule({
imports: [RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
})],
exports: [RouterModule]
})
export class AppRoutingModule {

}
