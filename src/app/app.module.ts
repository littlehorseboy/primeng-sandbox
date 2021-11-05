import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TreeDemoModule } from './tree-demo/tree-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
