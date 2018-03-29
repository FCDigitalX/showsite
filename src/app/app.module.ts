import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ContentfulService } from './service/contentful.service';
import { ProductsComponent } from './products/products.component';
import { ProductBidComponent } from './products/product-bid/product-bid.component';


// define the available routes
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products',  component: ProductListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductsComponent,
    ProductBidComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
