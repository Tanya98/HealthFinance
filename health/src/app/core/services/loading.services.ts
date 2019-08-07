import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class LoadingService {
  public loading$: BehaviorSubject<boolean>;

  constructor() {
    this.loading$ = new BehaviorSubject(false);
  }

  show(){
    this.loading$.next(true);
  }

  hide(){
    this.loading$.next(false);
  }
}
