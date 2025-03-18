import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const buttons: NodeListOf<HTMLButtonElement> = this.el.nativeElement.querySelectorAll(".resume-btn");
    
    if (buttons.length > 0) {
      // Ensure the first button is active by default
      buttons[0].classList.add("active");
    }

    buttons.forEach((button,idx) => {
      button.addEventListener("click", () => {
        // Remove 'active' class from all buttons
        const resumeDetails: NodeListOf<HTMLButtonElement> = this.el.nativeElement.querySelectorAll(".resume-details");
        buttons.forEach((btn) => btn.classList.remove("active"));

        // Add 'active' class to the clicked button
        button.classList.add("active");


        resumeDetails.forEach((detail)=>{
          detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');

      });
    });

 

}
}
  
  
 