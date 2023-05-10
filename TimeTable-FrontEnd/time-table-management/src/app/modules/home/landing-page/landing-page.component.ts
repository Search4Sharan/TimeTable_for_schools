import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();

  constructor(public afAuth: AngularFireAuth,public router : Router) {}

  ngOnInit() {}

  logout() {   
    
    this.afAuth.signOut();
    this.router.navigate(['/']); 
  }
}
