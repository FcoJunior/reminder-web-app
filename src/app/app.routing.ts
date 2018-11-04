import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);
