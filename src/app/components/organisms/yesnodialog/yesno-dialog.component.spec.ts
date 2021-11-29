import { TestBed, async } from '@angular/core/testing';
import { YesNoDialogComponent } from './yesno-dialog.component';

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

describe('YesNoDialogComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YesNoDialogComponent],
      imports: [
        AngularFireAuthModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(YesNoDialogComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
