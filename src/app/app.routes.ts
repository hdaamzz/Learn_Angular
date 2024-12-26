import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { HomeComponent } from './components/home/home.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';

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
        // loadChildren:()=>import('./components/data-binding/data-binding.component').then(x=>x.DataBindingComponent),
        component:HomeComponent
    },
    {
        path:'directives',
        component:DirectivesComponent
    },
    {
        path:'pipes',
        component:PipesComponent
    },
    {
        path:'pipes/:id',
        component:PipesComponent
    }
];
