import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PaintComponent } from './paint/paint.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { PhonePipePipe } from './pipes/phone-pipe.pipe';
import { MatInputModule } from '@angular/material/input';
import { ToolTipDirective } from './directives/tool-tip.directive';

@NgModule({
  declarations: [
    AppComponent,
    PaintComponent,
    ToolTipDirective,
    HeaderComponent,
    PhonePipePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
