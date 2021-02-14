import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
 All : Project[];
 works: Project[];
  constructor(private projService: ProjectService) { }

  ngOnInit(): void {
    this.All = this.projService.getAllProject();
    console.log(this.All)
    this.selectAll();
  }

  selectAll(){
    this.works = this.All;
  }

  selectAngular(){
    this.works = this.All.filter(proj => proj.tags.includes("Angular"))
  }

  selectNode(){
    this.works = this.All.filter(proj => proj.tags.includes("NodeJS"))
  }

  selectIonic(){
    this.works = this.All.filter(proj => proj.tags.includes("Ionic"))
  }

  selectOthers(){
    this.works = this.All.filter(proj => proj.tags.includes("Others"))
  }
  goToPage(url:string){
    window.open(url, "_blank");
  }
}
