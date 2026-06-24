import { Routes } from "@angular/router";
import { StudentCreate } from "./pages/student-create/student-create";
import { StudentEdit } from "./pages/student-edit/student-edit";
import { StudentList } from "./pages/student-list/student-list";
import { roleGuard } from "../../core/guards/role.guard";
import { authGuard } from "../../core/guards/auth.guard";

export const STUDENT_ROUTES: Routes = [
  {
    path: '',
    component: StudentList,
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['Admin']
    }
  },
  {
    path: 'create',
    component: StudentCreate
  },
  {
    path: 'edit/:id',
    component: StudentEdit
  }
];