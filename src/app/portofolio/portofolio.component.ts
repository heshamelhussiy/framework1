import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})

export class PortofolioComponent {

 
 openImg(img:HTMLImageElement,  ineerBox:HTMLDivElement,outerBox:HTMLDivElement){

  ineerBox.style.backgroundImage=`url(${img.src})`;
  outerBox.classList.remove("d-none");
   outerBox.addEventListener("click",function(e){
  
    outerBox.classList.add("d-none");})

    ineerBox.addEventListener("click",function(e){
      e.stopPropagation();
      ineerBox.classList.add("d-block");
   

   })
  


 }
  
  
}
