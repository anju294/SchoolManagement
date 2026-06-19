import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-item.model';
import { MENU_ITEMS } from '../../core/config/menu.config';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  menus:MenuItem[] = [];

  ngOnInit() {

    const role =
      localStorage.getItem('role');

    this.menus = MENU_ITEMS.filter(
      x => x.roles.includes(role ?? '')
    );
  }
}
