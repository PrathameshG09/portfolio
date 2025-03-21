import { Component, inject } from '@angular/core';
import { HomeComponent } from "../components/home/home.component";
import { AboutComponent } from "../components/about/about.component";
import { ContactComponent } from "../components/contact/contact.component";
import { ActivatedRoute } from '@angular/router';

import { PortfolioComponent } from "../components/portfolio/portfolio.component";


@Component({
  selector: 'app-container',
  imports: [HomeComponent, AboutComponent, ContactComponent, PortfolioComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  activeRoutes=inject(ActivatedRoute);

  ngOnInit(){
    this.activeRoutes.fragment.subscribe((data)=>{
       this.jumpToSection(data);
    })
  }
  jumpToSection(section: any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});

  }

}
