import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [WorksComponent],
  imports: [WorksRoutingModule, CommonModule],
  exports:[WorksComponent]
})
export class WorksModule { }