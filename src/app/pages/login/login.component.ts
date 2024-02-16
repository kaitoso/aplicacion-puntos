import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  async loginWithGoogle() {
    const credentials = await this.authService.signUpWithGoogle();
    if (credentials?.user.email) {
      localStorage.setItem('email', credentials.user.email);
      localStorage.setItem('name', credentials.user.displayName);
      localStorage.setItem('uid', credentials.user.uid);
      this.router.navigate(['']);
    }
    console.log(credentials);
  }
}
