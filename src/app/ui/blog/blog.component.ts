import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
images : string[] = ['https://source.unsplash.com/weekly?water', 'https://source.unsplash.com/weekly?river','https://source.unsplash.com/weekly?tree',
'https://source.unsplash.com/weekly?forest', 'https://source.unsplash.com/weekly?animal', 'https://source.unsplash.com/weekly?wild']
  constructor() { }

  ngOnInit(): void {
  
  }

}
