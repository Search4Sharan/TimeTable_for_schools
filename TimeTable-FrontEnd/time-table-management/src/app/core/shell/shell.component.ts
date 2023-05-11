import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  opened = false;

  links = [
    { name: 'Home', url: '/app/landing-page' },
    { name: 'View', url: '/view-page' },
    { name: 'Edit', url: '/edit-page' },
  ];

  toggleSidenav() {
    this.opened = !this.opened;
  }
}
