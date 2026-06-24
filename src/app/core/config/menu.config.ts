import { MenuItem } from "../../shared/models/menu-item.model";
export const MENU_ITEMS: MenuItem[] = [
{
    label: 'Students',
    icon: 'pi pi-users',
    route: '/students',
    roles: ['Admin']
},
{
    label: 'Attendance',
    icon: 'pi pi-calendar',
    route: '/attendance',
    roles: ['Admin', 'Teacher']
},
{
    label: 'My Attendance',
    icon: '',
    route: '/student/attendance',
    roles: ['Student']
  }
];