import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [BlogComponent],
    imports: [BlogRoutingModule, CommonModule],
    exports:[BlogComponent]
  })
  export class BlogModule { }