// ./src/app/contentful.service.ts
import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: 'hmyo51mpyfcb',
  accessToken: '3d439ea5a2d7f158a5efe466ae5af3cc36629d04a4aa1e4c2bc3af2a93c6d825',

  contentTypeIds: {
    product: 'product'
  }
}

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.product
    }, query))
    .then(res => res.items);
  }
}
