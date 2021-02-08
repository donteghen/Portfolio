import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [AboutComponent],
    imports: [AboutRoutingModule],
    exports:[AboutComponent]
  })
  export class AboutModule { }