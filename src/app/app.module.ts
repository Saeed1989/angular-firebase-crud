import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseService } from './services/firebase.service';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { AvatarDialogComponent } from './components/organisms/avatar-dialog/avatar-dialog.component';
import { EditItemComponent } from './components/pages/edit-item/edit-item.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EditItemResolver } from './components/pages/edit-item/edit-item.resolver';
import { AddItemComponent } from './components/pages/add-item/add-item.component';
import { ItemComponent } from './components/organisms/item/item.component';
import { LoginComponent } from './components/pages/login/login.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    EditItemComponent,
    AddItemComponent,
    ItemComponent,
    HomeComponent,
    LoginComponent,
  ],
  entryComponents: [AvatarDialogComponent],
  imports: [
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [MatDatepickerModule, MatInputModule, BrowserAnimationsModule],
  providers: [FirebaseService, EditItemResolver],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
