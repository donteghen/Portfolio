import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
form : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.maxLength(500)])
    });
  }

  get name(){
    return this.form.get('name');
  }
  get email(){
    return this.form.get('email');
  }
  get message(){
    return this.form.get('message');
  }
  sendEmail(form){
    console.log(form);
  }


}
