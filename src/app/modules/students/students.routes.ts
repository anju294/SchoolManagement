import { Routes } from "@angular/router";
import { StudentCreate } from "./pages/student-create/student-create";
import { StudentEdit } from "./pages/student-edit/student-edit";
import { StudentList } from "./pages/student-list/student-list";

export const STUDENT_ROUTES: Routes = [
  {
    path: '',
    component: StudentList
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