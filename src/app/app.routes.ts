import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Portfolio } from './features/portfolio/portfolio';
import { Contact } from './features/contact/contact';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
    {path:"", redirectTo:'home', pathMatch:"full"},
    {path:"home", component: Home},
    {path:"about", component: About},
    {path:"portfolio", component: Portfolio},
    {path:"contact", component: Contact},
    {path:"**", component: NotFound},
];
