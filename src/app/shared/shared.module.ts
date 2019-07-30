import { NgModule } from '@angular/core';

import { BootstrapComponentsModule } from './modules/bootstrap-components.module';

@NgModule({
  imports: [
    BootstrapComponentsModule
  ],
  exports: [
    BootstrapComponentsModule
  ]
})
export class SharedModule {}
