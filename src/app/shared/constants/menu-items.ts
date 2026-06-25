import { MenuItem } from '../models/menu-item.model';

export const MENU_ITEMS: MenuItem[] = [

  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    route: '/dashboard',
    roles: ['SuperAdmin', 'Admin', 'Teacher', 'Student']
  },

  {
    label: 'Students',
    icon: 'pi pi-users',
    roles: ['Admin', 'SuperAdmin'],
    items: [
      {
        label: 'Student List',
        icon: 'pi pi-list',
        route: '/students',
        roles: ['Admin','SuperAdmin']
      },
      {
        label: 'Add Student',
        icon: 'pi pi-plus',
        route: '/students/create',
        roles: ['Admin', 'SuperAdmin']
      }
    ]
  },

  {
    label: 'Attendance',
    icon: 'pi pi-calendar',
    route: '/attendance',
    roles: ['SuperAdmin', 'Admin', 'Teacher']
  },

  {
    label: 'Fees',
    icon: 'pi pi-wallet',
    route: '/fees',
    roles: ['SuperAdmin', 'Admin']
  }

];