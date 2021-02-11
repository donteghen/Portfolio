import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
 angular : string[] = [];
 node : string[] = [];
 ionic : string[] = [];
 netframwork : string[]= [];
 viewItems : string[];
  constructor() { }

  ngOnInit(): void {
    this.selectAll();
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
}
