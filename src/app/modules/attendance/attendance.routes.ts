import { Routes } from "@angular/router";
import { AttendanceList } from "./pages/attendance-list/attendance-list";
import { MarkAttendance } from "./pages/mark-attendance/mark-attendance";

export const ATTENDANCE_ROUTES: Routes = [
  {
    path: '',
    component: AttendanceList
  },
  {
    path: 'markAttendance',
    component: MarkAttendance
  },
];