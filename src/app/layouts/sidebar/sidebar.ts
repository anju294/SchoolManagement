import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-item.model';
import { MENU_ITEMS } from '../../core/config/menu.config';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  menus: MenuItem[] = [];
  ngOnInit(): void {
    const currentRole = 'Admin';

    this.menus = MENU_ITEMS.filter(
      menu => menu.roles.includes(currentRole)
    );
  }
}
