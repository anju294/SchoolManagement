import { Routes } from "@angular/router";
import { FeeList } from "./pages/fee-list/fee-list";
import { FeePayment } from "./pages/fee-payment/fee-payment";

export const FEES_ROUTES: Routes = [
  {
    path: '',
    component: FeeList
  },
  {
    path: 'feePayment',
    component: FeePayment
  }
];