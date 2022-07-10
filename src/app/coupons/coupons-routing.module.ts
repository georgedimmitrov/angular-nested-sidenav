import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponsComponent } from './coupons.component';

const routes: Routes = [
  {
    path: 'create',
    component: CouponsComponent,
  },
  {
    path: 'list',
    component: CouponListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponsRoutingModule {}
