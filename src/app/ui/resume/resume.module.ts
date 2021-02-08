import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [ResumeComponent],
  imports: [ResumeRoutingModule],
  exports:[ResumeComponent]
})
export class ResumeModule { }