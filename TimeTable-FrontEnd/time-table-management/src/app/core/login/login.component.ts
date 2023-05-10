import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  
  loginForm!: FormGroup;
    firebaseErrorMessage: string;


  constructor(private authService: FirebaseService, private router: Router, private afAuth: AngularFireAuth) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
  });

  this.firebaseErrorMessage = '';
  }


  ngOnInit(): void {
    // if (localStorage.getItem('user') !== null) {
    //   this.isSignedIn = true;
    // } else {
    //   this.isSignedIn = false;
    // }
 
  }

  // async OnClickSignIn(email: string, password: string) {
  //   await this.fireBaseService.signIn(email, password);
  //   if (this.fireBaseService.isLoggedIn) {
  //     this.isSignedIn = true;
  //   }
  // }

  // async OnClickSignUp(email: string, password: string) {
  //   await this.fireBaseService.register(email, password);
  //   if (this.fireBaseService.isLoggedIn) {
  //     this.isSignedIn = true;
  //   }
  //   console.log(email,password);
  // }

  // handleLogout() {
  //   this.isSignedIn = false;
  // }


  loginUser() {
    if (this.loginForm.invalid)
        return;

    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
        if (result == null) {                               // null is success, false means there was an error
            console.log('logging in...');
            this.router.navigate(['app/landing-page']);                // when the user is logged in, navigate them to dashboard
        }
        else if (result.isValid == false) {
            console.log('login error', result);
            this.firebaseErrorMessage = result.message;
        }
    });
}


}
