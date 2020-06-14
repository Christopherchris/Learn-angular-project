import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundamentalsRoutingModule } from './fundamentals-routing.module';
import { FundamentalsComponent } from './fundamentals.component';


@NgModule({
  declarations: [FundamentalsComponent],
  imports: [
    CommonModule,
    FundamentalsRoutingModule
  ]
})
export class FundamentalsModule { }
