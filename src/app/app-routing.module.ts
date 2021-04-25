import { PaintComponent } from './paint/paint.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: ':title', component: PaintComponent}
]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
