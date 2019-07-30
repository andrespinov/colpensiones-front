import { Component } from '@angular/core';
import { IndependentWorkerModel } from 'src/app/models/independent-worker.model';
import { TypeModel } from 'src/app/models/type-model';
import { TYPES } from 'src/app/shared/types';

@Component({
  selector: 'independents-form',
  templateUrl: 'independents-form.component.html'
})

export class IndependentsFormComponent {

  public documentTypes: TypeModel[];
  public genderTypes: TypeModel[];
  public worker: IndependentWorkerModel;

  public constructor() {
    this.documentTypes = TYPES.DOCUMENT_TYPES;
    this.genderTypes = TYPES.GENDER_TYPES;
    this.initWorkerData();
  }

  public initWorkerData(): void {
    this.worker = new IndependentWorkerModel();
  }
}
