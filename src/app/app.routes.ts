import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { HomeComponent } from './components/home/home.component';
import { DirectivesComponent } from './components/directives/directives.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"home",pathMatch:'full'
    },
    {
        path:'bindings',
        component:DataBindingComponent
    }
    ,{
        path:'home',
        component:HomeComponent
    },
    {
        path:'directives',
        component:DirectivesComponent
    }
];
