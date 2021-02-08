import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [ContactComponent],
    imports: [ContactRoutingModule],
    exports:[ContactComponent]
  })
  export class ContactModule { }