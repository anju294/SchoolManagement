import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth.service';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  userName = '';
  role: any = '';
  constructor(private router: Router, private authService: AuthService, private layoutService: LayoutService) { }
  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    this.role = this.authService.getRole();
  }
  logout() {

    localStorage.clear();

    this.router.navigate(['/auth/login']);
  }


  toggleTheme(): void {

    const currentTheme =
      localStorage.getItem('theme') ?? 'light';

    const newTheme =
      currentTheme === 'light'
        ? 'dark'
        : 'light';

    localStorage.setItem('theme', newTheme);

    document.body.setAttribute(
      'data-theme',
      newTheme
    );
  }

  toggleSidebar() {

    this.layoutService.toggleSidebar();
  }
}
