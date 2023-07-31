import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { School } from '../../models/school';
@Injectable()
export class ShareDataService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();
  constructor() { }
  sharedData: string = '';

  setSharedData(data: School): void {

    this.dataSubject.next(data);
  }
}
