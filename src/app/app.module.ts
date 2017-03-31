import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';

import { SecureRandomNumberService } from './secure-random-number.service'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InputComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SecureRandomNumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
