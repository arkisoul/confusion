import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FavoritesComponent } from '../favorites/favorites.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contactus', component: ContactComponent },
    { path: 'aboutus', component: AboutComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'favorites',     component: FavoritesComponent },
    { path: 'dishdetail/:id', component: DishdetailComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
