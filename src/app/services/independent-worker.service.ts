import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IndependentWorkerModel } from '../models/independent-worker.model';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../shared/endpoints';

@Injectable()
export class IndependentWorkerService {

  private independentWorkers: IndependentWorkerModel[] = [];

  public constructor(private http: HttpClient) {}

  public createIndependentWorkerObservable(worker: IndependentWorkerModel) {
    return this.http.post<IndependentWorkerModel>(environment.api + Endpoints.INDEPENDENT_WORKER, worker).pipe(
      map((createdWorker: IndependentWorkerModel) => {
        this.independentWorkers.push(createdWorker);
      })
    );
  }

  public getIndependentWorkersAsync() {
    return this.http.get<IndependentWorkerModel[]>(environment.api + Endpoints.INDEPENDENT_WORKER).pipe(
      map((workers: IndependentWorkerModel[]) => {
        this.independentWorkers = [...workers];
      })
    );
  }

  public updateIndependentWorkerState(worker: IndependentWorkerModel, approved: boolean) {
    worker.approved = approved;
    worker.reviewed = true;
    return this.http.put<IndependentWorkerModel>(environment.api + Endpoints.INDEPENDENT_WORKER, worker).pipe(
      map((updatedWorker: IndependentWorkerModel) => {
        const workerIndex = this.independentWorkers.findIndex((w: IndependentWorkerModel) =>
          w.documentNumber === updatedWorker.documentNumber
        );
        this.independentWorkers[workerIndex] = new IndependentWorkerModel(updatedWorker);
      })
    );
  }
}
