import { TestBed } from '@angular/core/testing';

import { EmpInterceptorInterceptor } from './emp-interceptor.interceptor';

describe('EmpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EmpInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EmpInterceptorInterceptor = TestBed.inject(EmpInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
