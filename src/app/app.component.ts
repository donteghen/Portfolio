import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MySoftware Adventure';
  socialLink :string[];
  constructor(){
    this.socialLink = ['https://www.facebook.com/donaldteghen/','https://github.com/donteghen',
    'https://www.linkedin.com/in/donald-ticha-teghen-420283125/'];
  }
  goToPage(url:string){
    window.open(url, "_blank");
  }
}
