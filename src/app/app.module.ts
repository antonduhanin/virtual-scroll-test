import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@NgModule({
  imports: [BrowserModule, FormsModule, VirtualScrollModule],
  declarations: [AppComponent, ThumbnailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
