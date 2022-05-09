import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../shared/pipes/safe.pipe';
import { SqreportsRoutingModule } from './sqreports-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SqreportListComponent } from './sqreport-list/sqreport-list.component';

@NgModule({
  imports: [
    CommonModule,
    SqreportsRoutingModule,
    SharedModule
  ],
  declarations: [
    SqreportListComponent,
    SafePipe
  ],
  entryComponents: [
  ]
})
export class SqreportsModule { }