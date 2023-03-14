import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataListTableModule } from './data-list-table/data-list-table.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataListTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
