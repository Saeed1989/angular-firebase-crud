import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { AuthService } from 'src/app/services/auth/auth.service';

describe('LoginComponent', () => {
  let firebaseServiceMock: any = { getLastId: jasmine.createSpy('getLastId') };
  let routerMock = { navigate: jasmine.createSpy('navigate') };
  let loadingService = { navigate: jasmine.createSpy('showLoadingIndicator') };
  let authServiceMock = { isLoggedIn: jasmine.createSpy('isLoggedIn') };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: FirebaseService, useValue: firebaseServiceMock },
        { provide: LoadingService, useValue: loadingService },
        { provide: AuthService, useValue: authServiceMock },
      ],
      imports: [
        AngularFireAuthModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatSliderModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
