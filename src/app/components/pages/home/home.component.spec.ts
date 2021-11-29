import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';

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

describe('HomeComponent', () => {
  let firebaseServiceMock: any = { getLastId: jasmine.createSpy('getLastId') };
  let routerMock = { navigate: jasmine.createSpy('navigate') };
  let loadingService = { navigate: jasmine.createSpy('showLoadingIndicator') };
  let routeMock = { data: jasmine.createSpy('data') };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: FirebaseService, useValue: firebaseServiceMock },
        { provide: LoadingService, useValue: loadingService },
        { provide: ActivatedRoute, useValue: routeMock },
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
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
