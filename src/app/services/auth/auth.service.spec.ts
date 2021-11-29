import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

describe('AuthService', () => {
  let injector: TestBed;
  let authService: AuthService;
  let fireAuthMock = { navigate: jasmine.createSpy('signOut') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFireAuth, useValue: fireAuthMock }],
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    authService = injector.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});
