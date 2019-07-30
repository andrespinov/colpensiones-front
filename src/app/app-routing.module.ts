import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { IndependentWorkersComponent } from './components/independent-workers/independent-workers.component';


const routes: Routes = [
  { path: 'personas-independientes', component: IndependentWorkersComponent },
  { path: '', redirectTo: '/personas-independientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
