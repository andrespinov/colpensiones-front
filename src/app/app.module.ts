import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { IndependentWorkerService } from './services/independent-worker.service';

// Modules
import { SharedModule } from './shared/shared.module';
import { IndependentWorkerModule } from './components/independent-workers/independent-worker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    IndependentWorkerModule,
    SharedModule,
  ],
  providers: [IndependentWorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
