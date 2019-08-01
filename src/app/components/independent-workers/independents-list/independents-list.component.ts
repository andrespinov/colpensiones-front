import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { IndependentWorkerModel } from 'src/app/models/independent-worker.model';
import { IndependentWorkerService } from 'src/app/services/independent-worker.service';
import { TypeModel } from 'src/app/models/type-model';
import { TYPES } from 'src/app/shared/types';

@Component({
    selector: 'app-independents-list',
    templateUrl: 'independents-list.component.html',
    animations: [
      trigger('detailExpand', [
        state('collapsed', style({display: 'none'})),
        state('expanded', style({height: '*'})),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      ]),
    ],
})

export class IndependentsListComponent {

  public columnsProps: string[];
  public documentTypes: TypeModel[];
  public expandedElement: IndependentWorkerModel;
  public genderTypes: TypeModel[];
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
    this.documentTypes = TYPES.DOCUMENT_TYPES;
    this.genderTypes = TYPES.GENDER_TYPES;
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

  public modifyWorker(approved: boolean) {
    this.independentWorkerService.updateIndependentWorkerState(this.expandedElement, approved).subscribe(() => {

    }, () => {});
  }
}
