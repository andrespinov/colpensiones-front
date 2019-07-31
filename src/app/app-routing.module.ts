import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { independentWorkersRoutes } from './components/independent-workers/independent-worker.routing';

const routes: Routes = [
  { path: 'personas-independientes', children: independentWorkersRoutes },
  { path: '', redirectTo: '/personas-independientes/formulario', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
