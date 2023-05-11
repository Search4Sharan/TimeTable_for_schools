import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [LoginComponent, ShellComponent, RegisterComponent],
  imports: [CommonModule, RouterModule, MatButtonModule,
    MatCardModule,
    MatInputModule, FormsModule,MatSidenavModule,MatIconModule,MatToolbarModule,MatListModule,
    ReactiveFormsModule],
  exports: [ShellComponent],
})
export class CoreModule {}
