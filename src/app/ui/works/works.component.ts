import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { VideoComponent } from 'src/app/video/video.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
 All : Project[];
 works: Project[];
  constructor(private projService: ProjectService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.All = this.projService.getAllProject();
    this.select();
    
  }
  select(tag?: string){
    this.works = tag ? this.All.filter(proj => proj.tags.includes(tag)) : this.All
  }
  
  open() {
    const modalRef = this.modalService.open(VideoComponent, {
      centered:true,
      animation:true,
      size:'xl'
    });
    modalRef.componentInstance.videoID = 'apVD1ewJcqc'; //QMP-o8WXSPM dQw4w9WgXcQ
  }

  goToPage(url:string){
    window.open(url, "_blank");
  }
}
