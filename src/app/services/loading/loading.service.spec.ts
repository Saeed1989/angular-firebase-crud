import { TestBed, async } from '@angular/core/testing';
import { LoadingService } from './loading.service';

describe('Service: My: TestBed', () => {
  let loadingService: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    loadingService = TestBed.inject(LoadingService);
  });

  it('should create an instance', () => {
    expect(loadingService).toBeDefined();
  });
});
