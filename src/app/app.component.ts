import { Component } from '@angular/core';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
 
 constructor(){}
 
 convetToPDF(){
  var data = document.getElementById('contentToConvert');
  html2canvas(data).then(canvas =>{
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;

    const contentDataUrl = canvas.toDataURL('image/jpeg')
    let pdf = new jsPDF();
    pdf.addImage(contentDataUrl, 'JPEG', 0, 0, imgWidth,imgHeight, 'FAST')
    pdf.save('pdftester')
  })
  }
}
