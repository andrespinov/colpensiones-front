import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { IndependentsFormComponent } from './components/independent-workers/independets-form/independents-form.component';
import { IndependentWorkersComponent } from './components/independent-workers/independent-workers.component';

// Services
import { IndependentWorkerService } from './services/independent-worker.service';

// Modules
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    IndependentsFormComponent,
    IndependentWorkersComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [IndependentWorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
