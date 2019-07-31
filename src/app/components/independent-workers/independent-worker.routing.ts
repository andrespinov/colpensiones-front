import { Routes } from '@angular/router';

// Components
import { IndependentsFormComponent } from './independets-form/independents-form.component';

export const independentWorkersRoutes: Routes = [
  { path: 'formulario', component: IndependentsFormComponent },
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
];
