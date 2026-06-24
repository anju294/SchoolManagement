import { Injectable } from '@angular/core';
import { MENU_ITEMS } from '../../shared/constants/menu-items';
import { MenuItem } from '../../shared/models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

//   getMenus(role: string) {

//     return MENU_ITEMS
//       .filter(x => x.roles.includes(role))
//       .map(menu => this.mapMenu(menu));
//   }

  private mapMenu(menu: MenuItem): any {

    return {
      label: menu.label,
      icon: menu.icon,
      routerLink: menu.route ? [menu.route] : undefined,

      items: menu.items?.map((item: any) => ({
        label: item.label,
        icon: item.icon,
        routerLink: item.route ? [item.route] : undefined
      }))
    };
  }

   getMenus(role: string): MenuItem[] {

    return MENU_ITEMS
      .filter(menu => menu.roles.includes(role))
      .map(menu => ({
        ...menu,
        items: menu.items?.filter(
          item => item.roles.includes(role)
        )
      }));
  }
}