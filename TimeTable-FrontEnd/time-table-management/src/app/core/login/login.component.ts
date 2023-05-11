import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  
  public username: string = '';
  public password: string = '';
  public loading: boolean = false;
  
  constructor(
    private authService: FirebaseService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    if (this.username === '' || this.password === '') {
      this.snackBar.open('Please enter a username and password.', 'Close', { duration: 3000 });
    } else {
      this.authService.loginUser(username, password).then((result) => {
        if (result == null) { // null is success, false means there was an error
          console.log('logging in...');
          this.loading = true;
          this.router.navigate(['app/landing-page']); // when the user is logged in, navigate them to dashboard
        } else if (result.isValid == false) {
          console.log('login error', result);
          this.snackBar.open('Invalid username or password.', 'Close', { duration: 3000 });
        }
      });
    }
  }
}
