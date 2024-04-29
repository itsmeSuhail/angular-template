import { Routes } from '@angular/router';
import { ObserverComponentComponent } from './pages/observer-component/observer-component.component';
import { SubjectComponentComponent } from './pages/subject-component/subject-component.component';

export const routes: Routes = [
    {
        path:"",
        component:ObserverComponentComponent
    },
    {
        path:"subject",
        component:SubjectComponentComponent
    }
];
