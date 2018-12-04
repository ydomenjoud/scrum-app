import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BoardComponent } from 'src/app/dashboard/pages/board/board.component';

import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
