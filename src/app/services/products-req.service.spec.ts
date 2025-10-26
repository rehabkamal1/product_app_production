import { TestBed } from '@angular/core/testing';

import { ProductsReqService } from './products-req.service';

describe('ProductsReqService', () => {
  let service: ProductsReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
