import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string,
  icon: string,
  route: string
}

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {

  items: NavItem[] = [
    { label: 'Home', icon: '🏠', route: '' },
    { label: 'Dashboard', icon: '🪟', route: 'dashboard' },
    { label: 'Login', icon: '📋', route: 'login' },
  ]
}
