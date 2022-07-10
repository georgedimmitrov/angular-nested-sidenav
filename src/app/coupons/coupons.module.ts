import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing.module';
import { CouponsComponent } from './coupons.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';

@NgModule({
  declarations: [CouponsComponent, CouponListComponent],
  imports: [CommonModule, CouponsRoutingModule],
})
export class CouponsModule {}
