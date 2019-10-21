import { Routes,RouterModule } from "@angular/router";
import { Taskdisplay1Component } from './taskdisplay1/taskdisplay1.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';


const arr : Routes=[

{path:'',component:HomeComponent},
{path:'home2',component:Home2Component},

{path:'task',component:Taskdisplay1Component}

];

export const routing=RouterModule.forRoot(arr);
