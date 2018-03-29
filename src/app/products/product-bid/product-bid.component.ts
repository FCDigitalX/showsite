import { Component, OnInit, Input } from '@angular/core';
import { ContentfulService } from '../../service/contentful.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-bid',
  templateUrl: './product-bid.component.html',
  styleUrls: ['./product-bid.component.scss']
})
export class ProductBidComponent implements OnInit {

  id: number;
  private sub: any;
  product: any;

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });

    this.contentfulService.getProducts()
    .then(products => this.product = products[this.id])

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
