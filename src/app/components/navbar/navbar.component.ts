import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  
  
// showSidebar(): void {
//   const sidebar = document.querySelector<HTMLElement>('.sidebar');
//   if (sidebar) {
//       sidebar.style.display = 'flex'; 
//   }
// }


// hideSidebar(): void {
//   const sidebar = document.querySelector<HTMLElement>('.sidebar');
//   if (sidebar) {
//       sidebar.style.display = 'none';
//   }
// }
// closeSidebarOnNav(): void {
//   this.hideSidebar(); 
// }




showSidebarState: boolean = false; 


ngOnInit() {
  this.hideSidebar();
}


toggleSidebar(): void {
  const sidebar = document.querySelector<HTMLElement>('.sidebar');


  if (window.innerWidth <= 768) {
    this.showSidebarState = !this.showSidebarState;  
    if (sidebar) {

      sidebar.style.display = this.showSidebarState ? 'none' : 'flex';
    }
  }
}


hideSidebar(): void {
  const sidebar = document.querySelector<HTMLElement>('.sidebar');
  if (sidebar) {
    sidebar.style.display = 'none';  
    
  }
}


closeSidebarOnNav(): void {
  this.hideSidebar();
}
}


  
 
  
    

    
    


  



  

  
  

  



