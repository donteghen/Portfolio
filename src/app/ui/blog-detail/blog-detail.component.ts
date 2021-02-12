import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
 form : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required, Validators.maxLength(200)])
    });
  }

  get name(){
    return this.form.get('name');
  }
  get comment(){
    return this.form.get('comment')
  }

   submit(form){
     console.log(form.value);
   }
}
