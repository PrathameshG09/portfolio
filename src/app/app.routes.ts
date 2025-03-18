import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContainerComponent } from './container/container.component';
import { SkillsComponent } from './components/skills/skills.component';


export const routes: Routes = [  
    {path:'',component:ContainerComponent},
    // {path:'',redirectTo:"/container",pathMatch:"full"},
    {path:'Container',component:ContainerComponent},  
    {path:'home',component:HomeComponent},
    {path:'skills',component:SkillsComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
];
