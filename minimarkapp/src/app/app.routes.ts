import { Routes } from '@angular/router';
import { PlantillaComponent } from './plantilla/plantilla.component';

export const routes: Routes = [
    {path:'plantilla', component: PlantillaComponent },
    {path: '',  redirectTo: '/plantilla', pathMatch: 'full' },
];
