import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContainerComponent } from './container/container.component';

import { PortfolioComponent } from './components/portfolio/portfolio.component';


export const routes: Routes = [  
    {path:'',component:ContainerComponent},
    // {path:'',redirectTo:"/container",pathMatch:"full"},
    {path:'Container',component:ContainerComponent},  
    {path:'home',component:HomeComponent},
    
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'portfolio',component:PortfolioComponent},
];
