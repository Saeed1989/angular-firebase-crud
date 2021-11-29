import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from './authguard.service';

describe('AuthGuard', () => {
  let injector: TestBed;
  let guard: AuthGuard;
  let authServiceMock: any = { isLoggedIn: jasmine.createSpy('isLoggedIn') };
  let routerMock = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AuthService, useValue: authServiceMock },
      ],
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    guard = injector.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect an unauthenticated user to the login route', () => {
    authServiceMock.isLoggedIn.and.returnValue(false);
    expect(guard.canActivate()).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['login']);
  });

  it('should allow the authenticated user to access app', () => {
    authServiceMock.isLoggedIn.and.returnValue(true);
    expect(guard.canActivate()).toEqual(true);
  });
});
