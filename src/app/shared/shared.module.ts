import { NgModule } from '@angular/core';

// Modules
import { MaterialModule } from './modules/material.module';

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule {}
