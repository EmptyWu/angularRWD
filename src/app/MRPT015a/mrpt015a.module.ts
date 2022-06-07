import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mrpt015aPipe } from '../shared/pipes/mrpt015a.pipe';
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
    mrpt015aPipe
  ],
  entryComponents: [
  ]
})
export class Mrpt015aModule { }