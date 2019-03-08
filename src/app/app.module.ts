import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMasonryGridModule } from 'ng-masonry-grid';
import  { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductRingComponent } from './product-ring/product-ring.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    ProductRingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgMasonryGridModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
