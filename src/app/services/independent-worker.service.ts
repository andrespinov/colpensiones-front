import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IndependentWorkerModel } from '../models/independent-worker.model';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../shared/endpoints';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class IndependentWorkerService {

  private independentWorkersSubject: Subject<boolean> = new Subject<boolean>();
  private independentWorkers: IndependentWorkerModel[] = [];

  public independentWorkersObservable: Observable<boolean> = this.independentWorkersSubject.asObservable();

  public constructor(private http: HttpClient) {}

  public createIndependentWorkerObservable(worker: IndependentWorkerModel) {
    return this.http.post<IndependentWorkerModel>(`${environment.api}${Endpoints.INDEPENDENT_WORKER}`, worker).pipe(
      map((createdWorker: IndependentWorkerModel) => {
        this.independentWorkers = [createdWorker, ...this.independentWorkers];
        this.independentWorkersSubject.next(true);
      })
    );
  }

  public getIndependentWorkersAsync() {
    return this.http.get<IndependentWorkerModel[]>(`${environment.api}${Endpoints.INDEPENDENT_WORKER}`).pipe(
      map((workers: IndependentWorkerModel[]) => {
        this.independentWorkers = [...workers];
        this.independentWorkersSubject.next(true);
      })
    );
  }

  public getIndependentWorkers(): IndependentWorkerModel[] {
    return this.independentWorkers;
  }

  public updateIndependentWorkerState(worker: IndependentWorkerModel, approved: boolean) {
    worker.approved = approved;
    return this.http.put<IndependentWorkerModel>(`${environment.api}${Endpoints.INDEPENDENT_WORKER}/${worker.documentNumber}`, worker).pipe(
      map((updatedWorker: IndependentWorkerModel) => {
        const workerIndex = this.independentWorkers.findIndex((w: IndependentWorkerModel) =>
          w.documentNumber === updatedWorker.documentNumber
        );
        this.independentWorkers[workerIndex] = new IndependentWorkerModel(updatedWorker);
        this.independentWorkersSubject.next(true);
      })
    );
  }
}
