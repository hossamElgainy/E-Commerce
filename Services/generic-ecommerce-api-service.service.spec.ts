import { TestBed } from '@angular/core/testing';
import { GenericECommerceApiServiceService } from './generic-ecommerce-api-service.service';


describe('GenericECommerceApiServiceService', () => {
  let service: GenericECommerceApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericECommerceApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
