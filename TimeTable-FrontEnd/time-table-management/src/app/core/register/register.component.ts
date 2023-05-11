import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  signupForm!: FormGroup;
    firebaseErrorMessage: string;

    constructor(private authService: FirebaseService, private router: Router, private afAuth: AngularFireAuth, private snackBar: MatSnackBar) {
      this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
      this.signupForm = new FormGroup({
          'displayName': new FormControl('', Validators.required),
          'email': new FormControl('', [Validators.required, Validators.email]),
          'password': new FormControl('', Validators.required)
      });
  }

  signup() {
      if (this.signupForm.invalid)       {
        this.snackBar.open('Please enter all details', 'Close', { duration: 3000 });
      }    else{
        this.authService.signupUser(this.signupForm.value).then((result) => {
          if (result == null)                                 // null is success, false means there was an error
          this.router.navigate(['app/landing-page']); 
          else if (result.isValid == false)
              this.firebaseErrorMessage = result.message;
      }).catch(() => {

      });
      }                 // if there's an error in the form, don't submit it
          

     
  }


}

