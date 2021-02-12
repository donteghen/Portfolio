import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
 angular : string[] = ['https://source.unsplash.com/weekly?water', 'https://source.unsplash.com/weekly?river'];
 node : string[] = ['https://source.unsplash.com/weekly?tree','https://source.unsplash.com/weekly?forest'];
 ionic : string[] = ['https://source.unsplash.com/weekly?animal', 'https://source.unsplash.com/weekly?wild'];
 netframwork : string[]= ['https://source.unsplash.com/weekly?house', 'https://source.unsplash.com/weekly?city'];
 viewItems : string[];
  constructor() { }

  ngOnInit(): void {
    this.selectAll();
    console.log(this.viewItems);
  }

  selectAll(){
    this.viewItems = [...this.angular, ...this.ionic, ...this.node, ...this.netframwork];
  }

  selectAngular(){
    this.viewItems = this.angular;
  }

  selectNode(){
    this.viewItems = this.node;
  }

  selectIonic(){
    this.viewItems = this.ionic;
  }

  selectNetFramework(){
    this.viewItems = this.netframwork;
  }
  goToPage(url:string){
    window.open(url, "_blank");
  }
}
