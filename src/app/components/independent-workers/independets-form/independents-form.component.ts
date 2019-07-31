import { Component } from '@angular/core';
import { IndependentWorkerModel } from 'src/app/models/independent-worker.model';
import { TypeModel } from 'src/app/models/type-model';
import { TYPES } from 'src/app/shared/types';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IndependentWorkerService } from 'src/app/services/independent-worker.service';

@Component({
  selector: 'independents-form',
  templateUrl: 'independents-form.component.html'
})

export class IndependentsFormComponent {

  public documentTypes: TypeModel[];
  public genderTypes: TypeModel[];
  public worker: IndependentWorkerModel;

  private workerForm: FormGroup;

  public constructor(
    private independentWorkerService: IndependentWorkerService
  ) {
    this.documentTypes = TYPES.DOCUMENT_TYPES;
    this.genderTypes = TYPES.GENDER_TYPES;
    this.initWorkerData();
  }

  get controlForm() { return this.workerForm; }

  get controls() { return this.workerForm.controls; }

  public initWorkerData(): void {
    this.worker = new IndependentWorkerModel();
    this.workerForm = new FormGroup({
      birthdate: new FormControl(this.worker.birthdate, [Validators.required]),
      email: new FormControl(this.worker.email, [Validators.email, Validators.required]),
      documentNumber: new FormControl(this.worker.documentNumber, [Validators.required]),
      documentType: new FormControl(this.worker.documentType, [Validators.required]),
      fullName: new FormControl(this.worker.fullName, [Validators.required]),
      gender: new FormControl(this.worker.gender, [Validators.required]),
      job: new FormControl(this.worker.job, [Validators.required]),
      monthlyIncome: new FormControl(this.worker.monthlyIncome, [Validators.required]),
      telephone: new FormControl(this.worker.telephone, [Validators.required])
    });
  }

  public onSaveWorker(): void {
    this.independentWorkerService.createIndependentWorkerObservable(new IndependentWorkerModel(this.workerForm.value)).subscribe(() => {
      this.initWorkerData();
    }, (error) => console.log(error));
  }
}
