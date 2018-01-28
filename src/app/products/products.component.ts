import { ContentfulService } from './../service/contentful.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product: any;
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
  }

}
