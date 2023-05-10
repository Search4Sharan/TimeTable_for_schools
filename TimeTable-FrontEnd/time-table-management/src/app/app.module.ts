import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseService } from './services/firebase.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './core/auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
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

  ],
  providers: [FirebaseService,AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
