import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogDetailRoutingModule } from './blog-detail-routing.module';
import { BlogDetailComponent } from './blog-detail.component';
@NgModule({
    declarations: [BlogDetailComponent],
    imports: [BlogDetailRoutingModule, CommonModule, ReactiveFormsModule],
    exports:[BlogDetailComponent]
  })
  export class BlogDetailModule { }