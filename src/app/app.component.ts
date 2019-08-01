import { Component } from '@angular/core';

import { IndependentWorkerService } from './services/independent-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'colpensiones-front';

  public constructor(private independentWorkerService: IndependentWorkerService) {
    this.independentWorkerService.getIndependentWorkersAsync().subscribe(() => {}, () => {});
  }
}
