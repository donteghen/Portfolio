import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ContactComponent],
    imports: [ContactRoutingModule, CommonModule, ReactiveFormsModule, FormsModule],
    exports:[ContactComponent]
  })
  export class ContactModule { }