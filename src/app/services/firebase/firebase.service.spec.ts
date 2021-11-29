import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  let injector: TestBed;
  let firebaseService: FirebaseService;
  let angularFirestoreMock = { navigate: jasmine.createSpy('collection') };
  let angularFireStorageMock = { navigate: jasmine.createSpy('ref') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: angularFirestoreMock },
        { provide: AngularFireStorage, useValue: angularFireStorageMock },
      ],
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    firebaseService = injector.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(firebaseService).toBeTruthy();
  });
});
