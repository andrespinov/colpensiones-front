import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Components
import { IndependentsFormComponent } from './independets-form/independents-form.component';
import { IndependentsListComponent } from './independents-list/independents-list.component';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    IndependentsFormComponent,
    IndependentsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})

export class IndependentWorkerModule {}
