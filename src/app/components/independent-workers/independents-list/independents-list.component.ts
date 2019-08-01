import { Component } from '@angular/core';
import { IndependentWorkerModel } from 'src/app/models/independent-worker.model';
import { MatTableDataSource } from '@angular/material/table';
import { IndependentWorkerService } from 'src/app/services/independent-worker.service';

@Component({
    selector: 'app-independents-list',
    templateUrl: 'independents-list.component.html'
})

export class IndependentsListComponent {

  public columnsProps: string[];
  public tableColumns = [
    { prop: 'documentType', name: 'Tipo de Documento' },
    { prop: 'documentNumber', name: 'Documento' },
    { prop: 'fullName', name: 'Nombre' }
  ];
  public tableDataSource: MatTableDataSource<IndependentWorkerModel>;
  public workers: IndependentWorkerModel[] = [];

  public constructor(
    private independentWorkerService: IndependentWorkerService
  ) {
    this.initData();
    this.independentWorkerService.independentWorkersObservable.subscribe(() => {
      this.initData();
    });
  }

  public initData(): void {
    this.workers = this.independentWorkerService.getIndependentWorkers();
    this.tableDataSource = new MatTableDataSource(this.workers);
    this.columnsProps = this.tableColumns.map(column => column.prop);
  }
}
