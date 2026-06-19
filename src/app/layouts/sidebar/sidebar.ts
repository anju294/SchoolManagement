import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../core/services/menu.service';
import { RouterModule } from '@angular/router';
import { LayoutService } from '../../core/services/layout.service';
import { MenuItem } from '../../shared/models/menu-item.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  items: MenuItem[] = [];
  collapsed = false;
  constructor(
    private menuService: MenuService, private layoutService: LayoutService
  ) {}

  ngOnInit() {

    const role =
      localStorage.getItem('role') ?? '';

    this.items =
      this.menuService.getMenus(role);

      this.layoutService.sidebarCollapsed$
      .subscribe(value => {

        this.collapsed = value;
      });
  }

  toggleMenu(menu: MenuItem): void {

    menu.expanded = !menu.expanded;
  }

}
