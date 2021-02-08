import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [BlogComponent],
    imports: [BlogRoutingModule],
    exports:[BlogComponent]
  })
  export class BlogModule { }