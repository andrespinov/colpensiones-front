import { Routes } from '@angular/router';

// Components
import { IndependentsFormComponent } from './independets-form/independents-form.component';
import { IndependentsListComponent } from './independents-list/independents-list.component';

export const independentWorkersRoutes: Routes = [
  { path: 'formulario', component: IndependentsFormComponent },
  { path: 'lista', component: IndependentsListComponent },
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
];
