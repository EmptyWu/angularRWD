import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../shared/pipes/safe.pipe';
import { Mrpt015aRoutingModule } from './mrpt015a-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Mrpt015aListComponent } from './mrpt015a-list/mrpt015a-list.component';

@NgModule({
  imports: [
    CommonModule,
    Mrpt015aRoutingModule,
    SharedModule
  ],
  declarations: [
    Mrpt015aListComponent,
    SafePipe
  ],
  entryComponents: [
  ]
})
export class Mrpt015aModule { }