import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaintComponent } from './paint/paint.component';
import { ToolTipDirective } from './directives/tool-tip.directive';

@NgModule({
  declarations: [
    AppComponent,
    PaintComponent,
    ToolTipDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
