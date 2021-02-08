import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [WorksComponent],
  imports: [WorksRoutingModule],
  exports:[WorksComponent]
})
export class WorksModule { }