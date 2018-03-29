// ./src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../service/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // define private class properties
  products: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getProducts()
    .then(products => this.products = products)
  }
}
