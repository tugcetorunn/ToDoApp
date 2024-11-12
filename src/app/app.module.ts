import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // form larda kullandığımız işlevleri örn checkbox, text input vs ve ngModel kullanacağımızda formsModule ü import etmemiz gerekiyor.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
