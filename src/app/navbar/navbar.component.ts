import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const navbar= document.querySelector("nav")

    if (scrollPosition >0) {
      navbar?.classList.add("navShrink")
    
    } else if (scrollPosition == 0) {
      navbar?.classList.remove("navShrink")
  
    
    }

   
  

  }

}
