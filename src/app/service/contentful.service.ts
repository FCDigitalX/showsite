// ./src/app/contentful.service.ts
import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: '22734hw7lnx4',
  accessToken: '1245bf698258f3d1e8c365929ee15aefc94a012e013fd25c08889f3990174021',

  contentTypeIds: {
    product: '2PqfXUJwE8qSYKuM0U6w8M'
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
