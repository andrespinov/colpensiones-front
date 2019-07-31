import { Component } from '@angular/core';
import { IndependentWorkerModel } from 'src/app/models/independent-worker.model';

@Component({
    selector: 'app-independents-list',
    templateUrl: 'independents-list.component.html'
})

export class IndependentsListComponent {

  public tableColumns = [
    { id: 'documentType', name: 'Tipo de Documento' },
    { id: 'documentNumber', name: 'Documento' },
    { id: 'fullName', name: 'Nombre' }
  ];
  public workers: IndependentWorkerModel[] = [];

  public constructor() {}
}
