import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './core/auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDEuAQnhNlvDyytnSIlrK7IL6C567H-QbU',
      authDomain: 'time-table-management-30d1c.firebaseapp.com',
      projectId: 'time-table-management-30d1c',
      storageBucket: 'time-table-management-30d1c.appspot.com',
      messagingSenderId: '462678147866',
      appId: '1:462678147866:web:0ed9dbdef9aca59cf462a3',
    }),
    BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,

  ],
  providers: [FirebaseService,AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
