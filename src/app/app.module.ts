import { CategoryPageModule } from './category-page/category-page.module';
import { BlogPageModule } from './blog-page/blog-page.module';
import { CartPageModule } from './cart-page/cart-page.module';
import { ItemModule } from './item/item.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ToolTipDirective } from './directives/tool-tip.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageModule } from './error-page/error-page.module';
import { AboutPageModule } from './about-page/about-page.module';
import { CareersPageModule } from './careers-page/careers-page.module';
import { HomeModule } from './home/home.module';
import { NgxsModule } from '@ngxs/store';
import { ItemsState } from './shared/app.state';

@NgModule({
  declarations: [
    AppComponent,
    ToolTipDirective,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    NgxsModule.forRoot([
      ItemsState,
    ]),
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
    AppRoutingModule,
    AboutPageModule,
    CareersPageModule,
    ErrorPageModule,
    HomeModule,
    ItemModule,
    CartPageModule,
    BlogPageModule,
    CategoryPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
