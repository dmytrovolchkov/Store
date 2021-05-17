import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'home/:id', loadChildren: () => import('./item/item.module').then(m => m.ItemModule)},
  {path: 'cart', loadChildren: () => import('./cart-page/cart-page.module').then(m => m.CartPageModule)},
  {path: 'blog', loadChildren: () => import('./blog-page/blog-page.module').then(m => m.BlogPageModule)},
  {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)},
  {path: 'careers', loadChildren: () => import('./careers-page/careers-page.module').then(m => m.CareersPageModule)},
  {path: 'error', loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPageModule)},
  {path: ':category',  loadChildren: () => import('./category-page/category-page.module').then(m => m.CategoryPageModule)},
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
